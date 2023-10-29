<template>
  <div class="rec-main">
    <side-bar path-name="HotRecommondRouter" />
    <hot-main-page />
  </div>
</template>
<script>
import SideBar from "@/components/SideBar";
import HotMainPage from "@/views/hot_rec/HotMainPage";
export default {
  name: "HotRecommondRouter",
  components: {
    SideBar,
    HotMainPage
  },
  data() {
    return {};
  },
  created() {
    console.log("OnCreated");
  },
  mounted() {
    console.log("OnMounted");
  }
};
</script>
<style scoped>
.rec-main {
  height: 100%;
  display: flex;
}
</style>
