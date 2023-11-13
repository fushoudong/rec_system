<template>
  <div class="like-page-main">
    <el-card shadow="hover">
        <el-row>
          <el-col :span="6">最优模型<el-tag style="margin-left: 10px" type="success">{{model_name}}</el-tag></el-col>
          <el-col :span="6">训练耗时<el-tag style="margin-left: 10px" type="success">{{time_cost}}</el-tag></el-col>
          <el-col :span="6">收敛于<el-tag style="margin-left: 10px" type="success">{{convergence}}</el-tag></el-col>
        </el-row>
        <el-form :model="form" style="margin-top: 20px; margin-bottom: -20px">
          <el-form-item label="选择用户">
            <el-select v-model="form.name" placeholder="">
              <el-option label="可爱的一斐" value="test"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
    </el-card>

    <div></div>
  </div>
</template>
<script>
export default {
  name: "LikeMainPage",
  data() {
    return {
        model_name: 'TACI',
        time_cost: '2小时7分38秒',
        convergence: 'best epoch 200',
        form: {
            name: 'test'
        }
    };
  },
  methods: {},
  created() {
    console.log("OnCreated");
  },
  mounted() {}
};
</script>
<style scoped>
.like-page-main {
    width: 1000px;
  padding: 10px;
}
</style>
