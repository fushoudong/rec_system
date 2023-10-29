<template>
  <div class="model-main">
    <side-bar />
    <model-main-page />
  </div>
</template>

<script>
import SideBar from "@/components/SideBar";
import ModelMainPage from "@/views/models/ModelMainPage";
export default {
  name: "Model",
  components: {
    SideBar,
    ModelMainPage
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
.model-main {
  display: flex;
  height: 100%;
}
</style>
