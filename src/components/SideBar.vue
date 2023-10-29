<template>
  <div :class="isCollapse ? 'narrow-side-bar' : 'side-bar'">
    <el-menu
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      ref="menu"
      class="side-bar-menu"
      router
      :default-active="activedPath"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
    >
      <!-- 一级导航 -->
      <template v-for="(menu, index) in menuList">
        <el-menu-item :index="menu.path + '/index'" :key="'path' + index">
          <i :class="menu.meta.icon"></i>
          <span>{{ menu.meta.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
    <div></div>
  </div>
</template>
<script>
export default {
  name: "SideBar",
  props: {
    pathName: String
    // 第一个导航名字将会被替换成该字段
  },
  components: {},
  data() {
    return {
      menuList: [],
      fullPath: "",
      isCollapse: false, // 是否折叠
      activedPath: this.$route.path // 默认界面路由
    };
  },
  watch: {
    $route(newVal, oldVal) {
      console.log(newVal, oldVal);
    }
  },
  methods: {
    getSideBarList() {
      const routes = this.$router.options.routes;
      console.log("routes", routes);
      let children = [];
      let path = "";

      routes.forEach(item => {
        if (item.meta != undefined && !item.meta.hidden) {
          children.push(item);
        }
        if (item.name === this.pathName) {
          path = item.path;
        }
      });
      this.fullPath = path;
      this.menuList = children;
    },
    handleOpen(key, keyPath) {
      console.log("open", key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log("close", key, keyPath);
    },
    handleSelect(key, path) {
        console.log('select', key, path)
    }
  },
  mounted() {
    this.getSideBarList();
  }
};
</script>
<style scoped>
.side-bar {
  width: 210px;
  flex-shrink: 0;
  height: 100%;
  background-color: rgb(84, 92, 100);
}

.narrow-side-bar {
  width: 90px;
  flex-shrink: 0;
  height: 100%;
  background-color: rgb(84, 92, 100);
}
.side-bar-menu {
  background: #f4f5f7;
  height: 100%;
}
</style>
