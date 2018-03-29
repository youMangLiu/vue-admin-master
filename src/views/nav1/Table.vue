<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="filters.unick" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="loadData">查询</el-button>
                </el-form-item>
                <!--<el-form-item>-->
                <!--<el-button type="primary" @click="handleAdd">新增</el-button>-->
                <!--</el-form-item>-->
            </el-form>
        </el-col>
        <!--列表-->
        <el-table :data="users" highlight-current-row v-loading="listLoading" @selection-change="selsChange"
                  style="width: 100%;">
            <!--<el-table-column type="selection" width="55">-->
            <!--</el-table-column>-->
            <el-table-column prop="uid" label="序号" width="80">
            </el-table-column>
            <el-table-column prop="uuid" label="游戏ID" width="80">
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
            <el-table-column prop="u_token" label="游客key" width="120">
            </el-table-column>
            <el-table-column prop="u_type" label="游客" width="80">
            </el-table-column>
            <el-table-column prop="status" label="用户状态" width="100">
            </el-table-column>
            <el-table-column prop="regist_ip" label="注册地址" width="120">
            </el-table-column>
            <el-table-column prop="regist_time" label="注册时间" width="120">
            </el-table-column>
            <el-table-column prop="login_ip" label="登录ip" width="120">
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
            <!--<el-table-column label="操作" width="150">-->
            <!--<template solt-scope="scope">-->
            <!--<el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
            <!--<el-button type="danger" size="small" @click="handleDel(scope.$index, scope.row)">删除</el-button>-->
            <!--</template>-->
            <!--</el-table-column>-->
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
            <!--<el-button type="danger" @click="batchRemove" :disabled="this.sels.length===0">批量删除</el-button>-->
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
                filters: {
                    unick: ''
                },
                users: [],
                total: 0,
                page: 1,
                listLoading: false,
                sels: [],//列表选中列

                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    unick: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //编辑界面数据
                editForm: {
                    id: 0,
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                },

                addFormVisible: false,//新增界面是否显示
                addLoading: false,
                addFormRules: {
                    unick: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //新增界面数据
                addForm: {
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                }

            }
        },
        mounted() {
            this.loadData()
        },
        methods: {
            //用户列表
            loadData() {
                let para = {
                    page: this.page
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
            //显示编辑界面
            handleEdit: function (index, row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
            },
            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    name: '',
                    sex: -1,
                    age: 0,
                    birth: '',
                    addr: ''
                };
            },
            //编辑
            editSubmit: function () {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.editForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            editUser(para).then((res) => {
                                this.editLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['editForm'].resetFields();
                                this.editFormVisible = false;
                                this.getUsers();
                            });
                        });
                    }
                });
            },
            //新增
            addSubmit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.addLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.addForm);
                            para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            addUser(para).then((res) => {
                                this.addLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['addForm'].resetFields();
                                this.addFormVisible = false;
                                this.getUsers();
                            });
                        });
                    }
                });
            },
            selsChange: function (sels) {
                this.sels = sels;
            },
            //批量删除
            batchRemove: function () {
                let uids = this.sels.map(item => item.uid).toString();
                let uuids = this.sels.map(item => item.uuid).toString();
                this.$confirm('确认删除选中记录吗？', '提示', {
                    type: 'warning'
                }).then(() => {
                    this.listLoading = true;
                    //NProgress.start();
                    let para = {uids: uids, uuids: uuids};
                    batchRemoveUser(para).then((res) => {
                        this.listLoading = false;
                        //NProgress.done();
                        this.$message({
                            message: '删除成功',
                            type: 'success'
                        });
                        this.getUsers();
                    });
                }).catch(() => {

                });
            }
        },
    }

</script>

<style scoped>

</style>