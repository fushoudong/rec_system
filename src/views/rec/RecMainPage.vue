<template>
  <div class="model-container">
    <!--<a href="https://echarts.apache.org/examples/zh/index.html#chart-type-pie"
      >参考链接</a
    >-->
    <div class="upload-area">
      <div>
        <el-card class="box-card">
          <el-row>
            <el-col :span="4"
              ><span style="width:40px;display:inline-block">模型</span>
              <el-tag type="primary">TACI</el-tag>
            </el-col>
            <el-col :span="18"
              ><span style="width:40px;display:inline-block">指标</span>
              <el-tag type="info" size="small">recall</el-tag>
              <el-tag type="info" size="small">precision</el-tag>
              <el-tag type="info" size="small">hit_ratio</el-tag>
              <el-tag type="info" size="small">ndcg</el-tag>
              <el-tag type="info" size="small">f1_score</el-tag>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" size="small"
                >训练模型<i class="el-icon-video-play"></i
              ></el-button>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
    <el-card class="chart_box">
      <div style="display: flex; width: 1450px;">
        <div style="width:720px" id="main-loss-chart" class="charts"></div>
        <div style="width:720px" id="method-loss-chart" class="charts"></div>
      </div>
      <el-divider></el-divider>
      <div style="display: flex; width: 1450px;">
        <div style="width:720px" id="neg-loss-chart" class="charts"></div>
        <div style="width:720px" id="train-time-chart" class="charts"></div>
      </div>
    </el-card>
  </div>
</template>

<script>
const {
  total_loss,
  time_data,
  mf_loss,
  reg_loss
} = require("../../libs/data/data");
export default {
  name: "RecMainPage",
  data() {
    return {
      selectedModels: [],
      modelList: [],
      all_option: {
        title: {
          text: "总损失"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [],
            type: "line",
            smooth: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)"
            }
          }
        ]
      },
      method_option: {
        title: {
          text: "方法损失"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [],
            type: "line",
            smooth: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)"
            }
          }
        ]
      },
      neg_option: {
        title: {
          text: "正则损失"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [],
            type: "line",
            smooth: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)"
            }
          }
        ]
      },
      time_option: {
        title: {
          text: "训练时间"
        },
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          type: "category",
          data: []
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [],
            type: "line",
            smooth: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)"
            }
          }
        ]
      }
    };
  },
  computed: {
    totalTime() {
      let all_time = 0;
      time_data.forEach(time => {
        all_time+=time
      })
      return all_time;
    }
  },
  methods: {
    drawChart() {
      let allLossChart = this.$echarts.init(
        document.getElementById("main-loss-chart")
      );
      allLossChart.setOption(this.all_option);
      let methodLossChart = this.$echarts.init(
        document.getElementById("method-loss-chart")
      );
      methodLossChart.setOption(this.method_option);
      let negLossChart = this.$echarts.init(
        document.getElementById("neg-loss-chart")
      );
      negLossChart.setOption(this.neg_option);
      let trainTimeChart = this.$echarts.init(
        document.getElementById("train-time-chart")
      );
      trainTimeChart.setOption(this.time_option);
    },
    initModelList() {
      for (let index = 0; index < 5; index++) {
        this.modelList.push({
          name: "model_" + (index + 1),
          key: "m" + index
        });
      }
      const initIndex = ["m0", "m2", "m3"];
      this.modelList.forEach(model => {
        if (initIndex.findIndex(index => model.key === index) !== -1) {
          this.selectedModels.push(model.name);
        }
      });
    },
    initOptions() {
      for (let index = 0; index < total_loss.length; index++) {
        this.all_option.xAxis.data.push(index);
        this.all_option.series[0].data.push(total_loss[index]);
      }
      for (let index = 0; index < mf_loss.length; index++) {
        this.method_option.xAxis.data.push(index);
        this.method_option.series[0].data.push(mf_loss[index]);
      }
      for (let index = 0; index < reg_loss.length; index++) {
        this.neg_option.xAxis.data.push(index);
        this.neg_option.series[0].data.push(reg_loss[index]);
      }
      for (let index = 0; index < time_data.length; index++) {
        this.time_option.xAxis.data.push(index);
        this.time_option.series[0].data.push(time_data[index]);
      }
    }
  },
  created() {
    this.initModelList();
    this.initOptions();
  },
  mounted() {
    this.drawChart();
  }
};
</script>

<style scoped>
.upload-area {
  padding: 15px;
}
.model-container {
  padding: 10px;
}
.charts {
  width: 720px;
  height: 400px;
  margin-top: 20px;
}
.box-card {
  padding: 20px;
}
.chart_box {
  width: 1500px;
  display: flex;
  justify-self: flex-start;
  margin-left: 15px;
  margin-top: -10px;
  padding-top: -20px;
}
</style>
