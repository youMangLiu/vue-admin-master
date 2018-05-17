<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.unick" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="filters.uuid" placeholder="游戏账号ID"></el-input>
                </el-form-item>
                <el-form-item label="房间类型" prop="room_type">
                    <el-select v-model="filters.u_type" clearable placeholder="请选择用户类型">
                        <el-option
                                v-for="item in uTypeArr"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="查询时间">
                    <el-date-picker
                            v-model="daterange"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            :picker-options="pickerOptions2"
                            @change="dateChange">
                    </el-date-picker>
                </el-form-item>
                <el-form-item prop="room_type">
                    <el-select v-model="filters.type" clearable placeholder="请选择查询时间类型">
                        <el-option
                                v-for="item in typeArr"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="loadData">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <!--列表-->
        <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange"
                  style="width: 100%;">
            <el-table-column prop="uid" label="序号" width="80">
            </el-table-column>
            <el-table-column prop="uuid" label="UUID" width="80">
            </el-table-column>
            <el-table-column prop="unick" label="用户昵称" width="100">
            </el-table-column>
            <el-table-column prop="uphone" label="手机号" width="100">
            </el-table-column>
            <el-table-column label="头像" width="100">
                <template slot-scope="scope">
                    <div v-if="scope.row.uface==='error'">
                        <img src="https://raw.githubusercontent.com/taylorchen709/markdown-images/master/vueadmin/user.png"
                             alt="" height="50px"/>
                    </div>
                    <div v-else>
                        <img :src="scope.row.uface" alt="" height="50px"/>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="uemail" label="邮箱" width="120">
            </el-table-column>
            <el-table-column prop="usex" label="性别" width="80">
                <!--:formatter="formatSex"-->
            </el-table-column>
            <el-table-column prop="uvip" label="vip等级" width="90">
            </el-table-column>
            <el-table-column prop="u_token" label="OpenId" width="120">
            </el-table-column>
            <el-table-column prop="u_type" label="登陆类型" width="80">
            </el-table-column>
            <el-table-column prop="status" label="用户状态" width="100">
            </el-table-column>
            <el-table-column prop="regist_ip" label="注册IP" width="120">
            </el-table-column>
            <el-table-column prop="regist_time" label="注册时间" width="120">
            </el-table-column>
            <el-table-column prop="login_ip" label="登录IP" width="120">
            </el-table-column>
            <el-table-column prop="login_time" label="登录时间" width="120">
            </el-table-column>
            <el-table-column prop="ugold" label="金币数量" width="100">
            </el-table-column>
            <el-table-column prop="ubank" label="保险柜(银行)金币数量" width="120">
            </el-table-column>
            <el-table-column prop="ucard" label="房卡数量" width="100">
            </el-table-column>
            <el-table-column prop="roomid" label="当前所在房间" width="120">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="120">
                <template slot-scope="scope">
                    <el-button @click="handleDel(scope.$index, scope.row)" type="text" size="small">
                        移除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20"
                           :total="total" style="float:right;">
            </el-pagination>
        </el-col>
    </section>
</template>

<script>
    import util from '../../common/js/util'
    import userInfoApi from '../../api/user'

    export default {
        data() {
            return {
                uTypeArr: [{
                    value: '',
                    label: '全部'
                }, {
                    value: '0',
                    label: '游客'
                }, {
                    value: '1',
                    label: 'QQ'
                }, {
                    value: '2',
                    label: '微信'
                }],
                typeArr: [{
                    value: '3',
                    label: '全部'
                }, {
                    value: '2',
                    label: '注册'
                }, {
                    value: '1',
                    label: '登陆'
                }],

                pickerOptions2: {
                    shortcuts: [{
                        text: '最近一周',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近一个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                            picker.$emit('pick', [start, end]);
                        }
                    }, {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date();
                            const start = new Date();
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                            picker.$emit('pick', [start, end]);
                        }
                    }]
                },
                filters: {
                    unick: '',
                    uuid: '',
                    u_type: '',
                    type: '',
                    start_time: '',
                    end_time: '',
                },
                users: [],
                daterange: [],
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],//列表选中列

            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            //用户列表
            loadData() {
                let para = {
                    page: this.page,
                    uuid: this.filters.uuid,
                    u_type: this.filters.u_type,
                    type: this.filters.type,
                    start_time: this.filters.start_time,
                    end_time: this.filters.end_time,
                };

                if (this.filters.unick !== '') {
                    para.unick = this.filters.unick
                }
                this.listLoading = true;
                userInfoApi.getUser(para, (res) => {
                    this.users = res.data.list;
                    this.total = parseInt(res.data.count);
                    this.listLoading = false;
                }).catch((error => {
                    console.log(error)
                }))
            },
            // //性别显示转换
            // formatSex: function (row, column) {
            //     return row.sex == 1 ? '男' : row.sex == 0 ? '女' : '未知';
            // },
            handleCurrentChange(val) {
                this.page = val;
                this.loadData();
            },
            //删除
            handleDel: function (index, row) {
                this.$confirm('确认删除该记录吗?', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    userInfoApi.delUser(row.uid, (res) => {
                        this.listLoading = false;
                        this.$notify({
                            message: res.data.msg,
                        });
                        this.loadData();
                    });
                }).catch(() => {
                    this.$notify({
                        message: '删除失败',
                    });
                });
            },
            //获取时间控件的值
            dateChange() {
                if (this.daterange !== null && this.daterange.length > 0) {
                    let [startTime, endTime] = this.daterange;
                    startTime != null && (this.filters.start_time = util.formatDates(startTime));
                    endTime != null && (this.filters.end_time = util.formatDates(endTime))
                } else {
                    this.filters.start_time = '';
                    this.filters.end_time = ''
                }
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
        },
    }

</script>

<style scoped>

</style>