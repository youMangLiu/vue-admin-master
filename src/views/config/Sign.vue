<template>
    <section>
        <!--工具条-->
        <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
            <el-form :inline="true">
                <el-form-item>
                    <el-button type="primary" @click="handleAdd">新增</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    <el-table :data="list" border style="width: 100%; margin-top: 20px">
        <el-table-column  prop="card" label="奖励的房卡数"></el-table-column>
        <el-table-column prop="glod" label="奖励的金币数"></el-table-column>
        <el-table-column prop="days" label="连续签到的天数"></el-table-column>
        <el-table-column label="操作" width="100">
            <template slot-scope="scope">
                <el-button @click="deleteSign(scope.row)" type="text" size="small">删除</el-button>
                <el-button @click="handleSign(scope.$index, scope.row)" type="text" size="small">编辑</el-button>
            </template>
        </el-table-column>
    </el-table>
        <!--工具条-->
        <el-col :span="24" class="toolbar">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20"
                           :total="total" style="float:right;">
            </el-pagination>
        </el-col>

    <!--编辑界面-->
    <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
        <el-form :model="editForm" label-width="80px" :rules="editFormRules" ref="editForm">
            <el-form-item label="奖励的房卡数" prop="card">
                <el-input v-model="editForm.card" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="奖励的金币数">
                <el-input v-model="editForm.glod"></el-input>
            </el-form-item>
            <el-form-item label="连续签到的天数">
                <el-input  v-model="editForm.days"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click.native="editFormVisible = false">取消</el-button>
            <el-button type="primary" @click.native="editSubmit()" :loading="editLoading">提交</el-button>
        </div>
    </el-dialog>

        <!--新增界面-->
        <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
            <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                <el-form-item label="奖励的房卡数" prop="card">
                    <el-input v-model="addForm.card" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="奖励的金币数">
                    <el-input v-model="addForm.glod"></el-input>
                </el-form-item>
                <el-form-item label="连续签到的天数">
                    <el-input  v-model="addForm.days"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="addFormVisible = false">取消</el-button>
                <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
            </div>
        </el-dialog>
    </section>
</template>

<script>
    import Api from '../../api/user'
    export default {
        data() {
            return {
                list: [{

                }],
                editFormVisible: false,//编辑界面是否显示
                editLoading: false,
                editFormRules: {
                    name: [
                        {required: true, message: '请输入姓名', trigger: 'blur'}
                    ]
                },
                //编辑界面数据
                editForm: {
                    id: 0,
                    glod: 0,
                    card: 0,
                    days: 0
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
                    id: 0,
                    glod: 0,
                    card: 0,
                    days: 0
                }
            }
        },
        mounted(){
            this.loadData()
        },

        methods:{
            loadData() {
                let para = {
                    page:this.page,
                };
                this.listLoading = true;
                Api.getSign(para, (res) => {
                    this.list = res.data.list;
                    this.total = res.data.total;
                    this.listLoading = false;
                }).catch((error => {
                    this.$notify({message:error})
                }))
            },
            handleSign: function (index, row) {
                this.editFormVisible = true;
                this.editForm = Object.assign({}, row);
            },
            //编辑
            editSubmit: function () {
                this.$refs.editForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.editLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.editForm);


                            // para.birth = (!para.birth || para.birth == '') ? '' : util.formatDate.format(new Date(para.birth), 'yyyy-MM-dd');
                            Api.editSign(this.editForm.id, para).then((res) => {
                                this.editLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['editForm'].resetFields();
                                this.editFormVisible = false;
                                this.loadData();
                            });
                        });
                    }
                });
            },
            //删除
            deleteSign: function (row) {
                this.$confirm('确认删除该记录吗？', '提示', {
                    type:'waring'
                }).then(() => {
                    this.listLoading = true;
                    Api.delSign(row.id, (res) => {
                        this.listLoading = false;
                        this.$notify({
                            message: res.data.msg
                        });
                        this.loadData();
                    });
                }).catch(() => {
                    this.$notify({message:'删除失败'})
                })
            },

            //显示新增界面
            handleAdd: function () {
                this.addFormVisible = true;
                this.addForm = {
                    glod: 0,
                    card: 0,
                    days: 0
                };
            },

            //新增
            addSubmit: function () {
                this.$refs.addForm.validate((valid) => {
                    if (valid) {
                        this.$confirm('确认提交吗？', '提示', {}).then(() => {
                            this.addLoading = true;
                            //NProgress.start();
                            let para = Object.assign({}, this.addForm);
                            Api.addSign(para).then((res) => {
                                this.addLoading = false;
                                //NProgress.done();
                                this.$message({
                                    message: '提交成功',
                                    type: 'success'
                                });
                                this.$refs['addForm'].resetFields();
                                this.addFormVisible = false;
                                this.loadData();
                            });
                        });
                    }
                });
            },

            handleCurrentChange(val) {
                this.page = val;
                this.loadData();
            },
        }
    }
</script>

<style scoped>

</style>