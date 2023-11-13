<template>
  <div class="rec-main">
    <side-bar />
    <rec-main-page />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import RecMainPage from "@/views/rec/RecMainPage";
export default {
  name: "RecMain",
  components: {
    SideBar,
    RecMainPage
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.rec-main {
  display: flex;
  height: 100%;
}
</style>
