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
                >测试<i class="el-icon-video-play"></i
              ></el-button>
            </el-col>
          </el-row>
        </el-card>
      </div>
    </div>
    <el-card class="chart_box">
      <div style="display: flex; width: 1450px;">
        <div
          style="width:720px;border: 1"
          id="recall-chart"
          class="charts"
        ></div>
        <div
          style="width:720px;border: 1"
          id="precision-chart"
          class="charts"
        ></div>
        <div style="width:720px;border: 1" id="hit-chart" class="charts"></div>
      </div>
      <el-divider></el-divider>
      <div style="display: flex; width: 1450px;">
        <div style="width:720px;border: 1" id="ndcg-chart" class="charts"></div>
        <div
          style="width:720px;border: 1"
          id="f1_score-chart"
          class="charts"
        ></div>
      </div>
    </el-card>
  </div>
</template>

<script>
const {
  recall,
  precision,
  hit,
  ndcg,
  f1_score
} = require("../../libs/data/data");
export default {
  name: "RecMainPage",
  data() {
    return {
      selectedModels: [],
      modelList: [],
      recall_option: {
        title: {
          text: "recall"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        legend: {
          data: ["k=20", "k=50"]
        },
        series: [
          {
            data: [],
            name: "k=20",
            type: "line",
            smooth: true
          },
          {
            data: [],
            name: "k=50",
            type: "line",
            smooth: true
          }
        ]
      },
      precision_option: {
        title: {
          text: "precision"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        legend: {
          data: ["k=20", "k=50"]
        },
        series: [
          {
            data: [],
            name: "k=20",
            type: "line",
            smooth: true
          },
          {
            data: [],
            name: "k=50",
            type: "line",
            smooth: true
          }
        ]
      },
      hit_option: {
        title: {
          text: "hit"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        legend: {
          data: ["k=20", "k=50"]
        },
        series: [
          {
            data: [],
            name: "k=20",
            type: "line",
            smooth: true
          },
          {
            data: [],
            name: "k=50",
            type: "line",
            smooth: true
          }
        ]
      },
      ndcg_option: {
        title: {
          text: "ndcg"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        legend: {
          data: ["k=20", "k=50"]
        },
        series: [
          {
            data: [],
            name: "k=20",
            type: "line",
            smooth: true
          },
          {
            data: [],
            name: "k=50",
            type: "line",
            smooth: true
          }
        ]
      },
      f1_score_option: {
        title: {
          text: "f1_score"
        },
        tooltip: {
          trigger: "axis"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
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
        legend: {
          data: ["k=20", "k=50"]
        },
        series: [
          {
            data: [],
            name: "k=20",
            type: "line",
            smooth: true
          },
          {
            data: [],
            name: "k=50",
            type: "line",
            smooth: true
          }
        ]
      }
    };
  },
  methods: {
    drawChart() {
      let recallChart = this.$echarts.init(
        document.getElementById("recall-chart")
      );
      recallChart.setOption(this.recall_option);

      let precisionChart = this.$echarts.init(
        document.getElementById("precision-chart")
      );
      precisionChart.setOption(this.precision_option);

      let hitChart = this.$echarts.init(document.getElementById("hit-chart"));
      hitChart.setOption(this.hit_option);

      let ndcgChart = this.$echarts.init(document.getElementById("ndcg-chart"));
      ndcgChart.setOption(this.ndcg_option);

      let f1ScoreChart = this.$echarts.init(
        document.getElementById("f1_score-chart")
      );
      f1ScoreChart.setOption(this.f1_score_option);
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
      for (let index = 0; index < recall.length; index++) {
        const data = recall[index];
        this.recall_option.xAxis.data.push(index * 10);
        this.recall_option.series[0].data.push(recall[index][0]);
        this.recall_option.series[1].data.push(recall[index][1]);
      }
      for (let index = 0; index < precision.length; index++) {
        const data = precision[index];
        this.precision_option.xAxis.data.push(index * 10);
        this.precision_option.series[0].data.push(precision[index][0]);
        this.precision_option.series[1].data.push(precision[index][1]);
      }
      for (let index = 0; index < ndcg.length; index++) {
        const data = ndcg[index];
        this.ndcg_option.xAxis.data.push(index * 10);
        this.ndcg_option.series[0].data.push(ndcg[index][0]);
        this.ndcg_option.series[1].data.push(ndcg[index][1]);
      }
      for (let index = 0; index < hit.length; index++) {
        const data = hit[index];
        this.hit_option.xAxis.data.push(index * 10);
        this.hit_option.series[0].data.push(hit[index][0]);
        this.hit_option.series[1].data.push(hit[index][1]);
      }
      for (let index = 0; index < f1_score.length; index++) {
        const data = f1_score[index];
        this.f1_score_option.xAxis.data.push(index * 10);
        this.f1_score_option.series[0].data.push(f1_score[index][0]);
        this.f1_score_option.series[1].data.push(f1_score[index][1]);
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
