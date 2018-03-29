<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0;">
            <el-form :inline="true" :model="filters">
                <el-form-item lable="房间类型" prop="room_type">
                    <el-select v-model="filters.room_type" placeholder="请选择" @chang="change">
                        <el-option
                                v-for="item in roomTypeArr"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item lable="房间状态" prop="room_state">
                    <el-select v-model="filters.room_state" placeholder="请选择" @chang="change">
                        <el-option
                                v-for="item in roomStateArr"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" v-on:click="loadData">查询</el-button>
                </el-form-item>
            </el-form>
        </el-col>
        <!--列表-->
        <el-table :data="roomList" highlight-current-row v-loading="listLoading" style="width: 100%;">
            <el-table-column prop="room_id" label="房间ID">
            </el-table-column>
            <el-table-column prop="jushu" label="局数" width="200">
            </el-table-column>
            <el-table-column prop="renshu" label="人数">
            </el-table-column>
            <el-table-column prop="play" label="玩法" width="300">
            </el-table-column>
            <el-table-column prop="liudi" label="留底">
            </el-table-column>
            <el-table-column prop="room_type_name" label="游戏类型">
            </el-table-column>
            <el-table-column prop="room_state_name" label="房间状态">
            </el-table-column>
            <el-table-column prop="create_time" label="创建时间">
            </el-table-column>
            <el-table-column prop="homeowners" label="房主游戏ID">
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
                    room_type: '',
                    room_state: ''
                },
                roomList: [],
                roomTypeArr: [],
                roomStateArr: [],
                total: 0,
                page: 1,
                listLoading: false,
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
                if (this.filters.room_type !== '') {
                    para.room_type = this.filters.room_type
                }
                if (this.filters.room_state !== '') {
                    para.room_state = this.filters.room_state
                }
                this.listLoading = true;
                userInfoApi.getRoomList(para, (res) => {
                    this.roomList = res.data.list;
                    this.roomTypeArr = res.data.room_type;
                    this.roomStateArr = res.data.room_state;
                    this.total = parseInt(res.data.count);
                    this.listLoading = false;
                }).catch((error => {
                    this.$notify({message: error})
                }))
            },
            handleCurrentChange(val) {
                this.page = val;
                this.loadData();
            },

            change() {
                this.filter()
            }
        },
    }

</script>

<style scoped>

</style>