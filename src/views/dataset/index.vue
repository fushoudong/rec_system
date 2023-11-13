<template>
  <div class="dataset-main">
    <side-bar />
    <data-set-main-page />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import DataSetMainPage from "@/views/dataset/DataSetMainPage";
export default {
  name: "DataSetMain",
  components: {
    SideBar,
    DataSetMainPage
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.dataset-main {
  display: flex;
  height: 100%;
}
</style>
