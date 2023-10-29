<template>
  <div>
    <el-card :body-style="{ padding: '0px' }" class="list-item" shadow="hover">
      <img :src="imageUrl" class="image" />
      <div class="info_row">
        <span class="name">{{ name }}</span>
      </div>
      <div style="padding: 14px;">
        <div class="bottom clearfix">
          <el-rate
            v-model="score"
            show-score
            text-color="#ff9900"
            score-template="{value}"
            :max="5"
            void-icon-class="icon-rate-face-off"
          >
          </el-rate>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "RateItem",
  props: {
    imageUrl: String,
    score: Number,
    name: String
  },
  data() {
    return {
      score1: 2.3
    };
  },
  created() {}
};
</script>
<style scoped>
.list-item {
  width: 200px;
  padding: 5px;
}

.image {
  display: block;
  width: 190px;
  height: 240px;
  cursor: pointer;
}

.info_row {
  padding-left: 20px;
  padding-top: 5px;
  margin-bottom: -10px;
}
</style>
