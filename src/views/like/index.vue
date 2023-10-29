<template>
  <div class="like-main">
    <side-bar></side-bar>
    <like-main-page />
  </div>
</template>
<script>
import SideBar from "../../components/SideBar";
import LikeMainPage from "./LikeMainPage.vue";
export default {
  name: "RateHistoryRouter",
  components: {
    SideBar,
    LikeMainPage,
  },
  data() {
    return {};
  },
  created() {
    console.log("OnCreated");
  },
  mounted() {
    console.log("OnMounted");
  },
};
</script>
<style scoped>
.like-main {
  height: 100%;
  display: flex;
}
</style>
