<template>
  <div class="model-com-container">
    <div class="upload-area">
      <div>
        <el-card class="box-card">
          <el-row>
            <el-col :span="4"
              ><span style="width:40px;display:inline-block">模型</span>
              <el-tag type="primary">TACI</el-tag>
              <el-tag type="success">MACR</el-tag>
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
                >模型对比<i class="el-icon-video-play"></i
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
  f1_score,
  recall1,
  precision1,
  hit1,
  ndcg1,
  f1_score1
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
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["ModelName", "TACI", "MACR"],
          source: [
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }]
      },
      precision_option: {
        title: {
          text: "precision"
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["ModelName", "TACI", "MACR"],
          source: [

          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }]
      },
      hit_option: {
        title: {
          text: "hit"
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["ModelName", "TACI", "MACR"],
          source: [

          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }]
      },
      ndcg_option: {
        title: {
          text: "ndcg"
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["ModelName", "TACI", "MACR"],
          source: [
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }]
      },
      f1_score_option: {
        title: {
          text: "f1_score"
        },
        legend: {},
        tooltip: {},
        dataset: {
          dimensions: ["ModelName", "TACI", "MACR"],
          source: [
          ]
        },
        xAxis: { type: "category" },
        yAxis: {},
        series: [{ type: "bar" }, { type: "bar" }]
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
      for (let index = 0; index < 10; index++) {
        const data1 = recall[index][0];
        const data2 = recall1[index][0];
        this.recall_option.dataset.source.push({
          ModelName: `${index*10} `,
          TACI: data1,
          MACR: data2
        });
      }
      for (let index = 0; index < 10; index++) {
        const data1 = precision[index][0];
        const data2 = precision1[index][0];
        this.precision_option.dataset.source.push({
          ModelName: `${index*10} `,
          TACI: data1,
          MACR: data2
        });
      }
      for (let index = 0; index < 10; index++) {
        const data1 = hit[index][0];
        const data2 = hit1[index][0];
        this.hit_option.dataset.source.push({
          ModelName: `${index*10} `,
          TACI: data1,
          MACR: data2
        });
      }
      for (let index = 0; index < 10; index++) {
        const data1 = ndcg[index][0];
        const data2 = ndcg1[index][0];
        this.ndcg_option.dataset.source.push({
          ModelName: `${index*10} `,
          TACI: data1,
          MACR: data2
        });
      }
      for (let index = 0; index < 10; index++) {
        const data1 = f1_score[index][0];
        const data2 = f1_score1[index][0];
        this.f1_score_option.dataset.source.push({
          ModelName: `${index*10} `,
          TACI: data1,
          MACR: data2
        });
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
.model-com-container {
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
