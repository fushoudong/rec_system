<template>
  <div class="model-container">
    <a href="https://echarts.apache.org/examples/zh/index.html#chart-type-pie"
      >参考链接</a
    >
    <div id="model-chart" class="charts"></div>
  </div>
</template>

<script>
export default {
  name: "ModelMain",

  data() {
    return {
      option: {
        title: {
          text: "示例charts"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {},
        toolbox: {
          show: true,
          feature: {
            dataZoom: {
              yAxisIndex: "none"
            },
            dataView: { readOnly: false },
            magicType: { type: ["line", "bar"] },
            restore: {},
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} °C"
          }
        },
        series: [
          {
            name: "Highest",
            type: "line",
            data: [10, 11, 13, 11, 12, 12, 9],
            markPoint: {
              data: [
                { type: "max", name: "Max" },
                { type: "min", name: "Min" }
              ]
            },
            markLine: {
              data: [{ type: "average", name: "Avg" }]
            }
          },
          {
            name: "Lowest",
            type: "line",
            data: [1, -2, 2, 5, 3, 2, 0],
            markPoint: {
              data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
            },
            markLine: {
              data: [
                { type: "average", name: "Avg" },
                [
                  {
                    symbol: "none",
                    x: "90%",
                    yAxis: "max"
                  },
                  {
                    symbol: "circle",
                    label: {
                      position: "start",
                      formatter: "Max"
                    },
                    type: "max",
                    name: "最高点"
                  }
                ]
              ]
            }
          }
        ]
      }
    };
  },
  methods: {
    drawChart() {
      console.log(this.$echarts);
      let myChart = this.$echarts.init(document.getElementById("model-chart"));
      myChart.setOption(this.option);
    }
  },
  created() {},
  mounted() {
    this.drawChart();
  }
};
</script>

<style scoped>
.model-container {
  padding: 10px;
}
.charts {
  width: 1200px;
  height: 800px;
  margin-top: 20px;
}
</style>
