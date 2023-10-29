<!--
 * @Descripttion: 
 * @version: 
 * @Author: shoudongfu@tencent.com
 * @Date: 2023-10-29 15:10:56
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-29 15:20:17
-->
<template>
  <div class="hot-page-main">
    <el-row class="hot-row">
      <el-col :span="18"><rate-board /></el-col>
      <el-col :span="6">
        <top-hot-rec />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import RateBoard from "@/views/hot_rec/RateBoard";
import TopHotRec from "@/views/hot_rec/TopHotRec";

export default {
  name: "HotMainPage",
  components: {
    RateBoard,
    TopHotRec
  },
  data() {
    return {};
  },
  methods: {},
  created() {
    console.log("OnCreated");
  },
  mounted() {}
};
</script>
<style scoped>
.hot-page-main {
  padding: 10px;
  width: 100%;
}
.hot-row {
  width: calc(100vw) - 210px;
  height: 100%;
}
</style>
