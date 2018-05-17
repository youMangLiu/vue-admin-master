<template>
    <section>
        <div style="margin: 20px;"></div>
        <el-form :label-position="labelPosition" label-width="80px" :model="data">
            <el-form-item label="初始化的玩家金币" label-width="180px">
                <el-input v-model="data.init_gold" style="width: 230px"></el-input>
            </el-form-item>
            <el-form-item label="初始化的玩家银行资产" label-width="180px">
                <el-input v-model="data.init_bank" style="width: 230px"></el-input>
            </el-form-item>
            <el-form-item label="初始化的玩家房卡数量" label-width="180px">
                <el-input v-model="data.init_card" style="width: 230px"></el-input>
            </el-form-item>
        </el-form>
        <el-button type="success" @click="editHandle(data.id)">保存</el-button>
    </section>
</template>

<script>
    import reg from '../../api/user'

    export default {
        data() {
            return {
                labelPosition: 'right',
                data: {
                    id: '',
                    init_gold: '',
                    init_bank: '',
                    init_card: ''
                }
            };
        },

        mounted() {
            this.loadData()
        },

        methods: {
            //注册配置
            loadData() {
                let para = {};
                this.listLoading = true;
                reg.getReg(para, (res) => {
                    this.data = res.data.data;
                    this.listLoading = false;
                }).catch((error => {
                    this.$notify({message: error.message})
                }))
            },
            //编辑
            editHandle: function (id) {
                let param = {
                    'id': this.data.id,
                    'init_gold': this.data.init_gold,
                    'init_bank': this.data.init_bank,
                    'init_card': this.data.init_card,
                };
                this.listLoading = true;
                reg.editReg(id, param, (res) => {
                    this.listLoading = false;
                    this.$notify({
                        message: res.data.msg,
                    });
                    this.loadData();
                });
            }
        }

    }
</script>

<style scoped>

</style>