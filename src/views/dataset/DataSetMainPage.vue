<template>
  <div class="dataset-container">
    <!--<a href="https://echarts.apache.org/examples/zh/index.html#chart-type-pie"
      >参考链接</a
    >-->
    <el-button type="primary" size="small" style="margin-left: 15px"
      >选择数据集</el-button
    >
    <el-card
      shadow="never"
      class="show-part"
      style="height: 600px; padding-top: -10px; overflow:scroll"
    >
      <div v-for="desc in tableData" :key="desc.name">
        <div shadow="hover">
          <el-descriptions
            class="margin-top"
            :title="desc.name"
            :column="3"
            :size="size"
            border
          >
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                数据集名称
              </template>
              {{ desc.name }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-user"></i>
                用户数
              </template>
              {{ desc.user_cnt }}
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-location-outline"></i>
                项目数
              </template>
              {{ desc.project_cnt }}
            </el-descriptions-item>

            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                训练集
              </template>
              <el-tag size="small">{{ desc.train }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                测试集
              </template>
              <el-tag size="small">{{ desc.test }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                验证集
              </template>
              <el-tag size="small">{{ desc.valid }}</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
              <template slot="label">
                <i class="el-icon-tickets"></i>
                稀疏度
              </template>
              {{ desc.rate }}
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </div>

      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="originData.length"
        >
        </el-pagination>
      </div>
    </el-card>
    <el-card style="width: 500px; margin: 10px" shadow="never">
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
        size="small"
      >
        <el-form-item label="数据集名称" prop="name">
          <el-input v-model="ruleForm.name"></el-input>
        </el-form-item>
        <el-form-item label="数据集描述" prop="desc">
          <el-input type="textarea" v-model="ruleForm.desc"></el-input>
        </el-form-item>
        <el-form-item label="选择文件" prop="name">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList"
          >
            <el-button size="small" type="primary"
              >点击上传<i class="el-icon-upload el-icon--right"></i
            ></el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div style="position: absolute; top: 894px; left: 640px;">
        <el-button type="primary" @click="submitForm('ruleForm')" size="small"
          >立即添加</el-button
        >
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "DataSetMainPage",
  data() {
    return {
      allFileList: [],
      action: "",
      currentPage: 0,
      pageSize: 10,
      originData: [
        {
          name: "douban",
          time: "1996-2008",
          user_cnt: "47890",
          project_cnt: "26047",
          rate: "0.005312",
          train: "6625965",
          test: "379537",
          valid: "168716"
        }
      ],
      rules: {
        name: [
          { required: true, message: "请输入数据集名称", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      ruleForm: {
        name: "",
        desc: ""
      }
    };
  },
  computed: {
    tableData() {
      return this.originData.slice(
        this.currentPage,
        (this.currentPage + 1) * this.pageSize
      );
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage = val;
      console.log(`当前页: ${val}`);
    },
    // 文件改变时
    handleFileChange(file, fileList) {
      const _this = this;
      console.log("change", file, fileList);
      if (fileList.length >= 2) {
        fileList.shift();
      }
      if (file.name.slice(-4) != ".csv") {
        this.$message.warning("只能选择csv文件");
        _this.allFileList = [];
      }
    },
    // 文件移除时
    handleRemove(file, fileList) {
      console.log("do file remove", file, fileList);
    },
    //文件已上传
    handlePreview(file) {
      //   console.log(file);
      this.$$message.success("文件上传成功");
    },
    // 文件超出限制
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${
          files.length
        } 个文件，共选择了 ${files.length + fileList.length} 个文件`
      );
    }
  },
  created() {
    // for (let index = 0; index < 30; index++) {
    //   const row = {
    //     time: "2023-05-03 12:00:12",
    //     user_cnt: "100",
    //     project_cnt: "200",
    //     rate: "30%",
    //     record: "22"
    //   };
    //   this.originData.push(row);
    // }
  },
  mounted() {}
};
</script>

<style scoped>
.upload-area {
  padding: 15px;
}
.dataset-container {
  padding: 10px;
}
.box-card {
  padding: 20px;
}
.show-part {
  margin: 15px;
  width: 1000px;
}
.block {
  position: absolute;
  width: 100%;
  top: 670px;
  left: -510px;
  display: flex;
  justify-content: flex-end;
}
</style>
