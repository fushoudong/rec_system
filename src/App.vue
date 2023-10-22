<template>
  <div id="app">
    <el-header class="header-container">
      <el-row class="header">
        <el-col :span="3" class="logo">
          <h3 class="mainTitle" style="white-space: nowrap;">推荐系统</h3>
        </el-col>
        <el-col :span="20">
         &nbsp;
        </el-col>
        <el-col class="avator" :span="1">
          <el-dropdown @command="handleCommand">
            <span>
              <el-avatar :size="30" :src="headerURL"></el-avatar><i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item icon="el-icon-info" command="info">修改信息</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-close" command="logout">登出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
   <div style="height: calc(100vh - 78px);">
    <router-view />
   </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      headerURL: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    }
  },
  watch: {
    '$route': {
      handler(to, from) {
        console.log(from, to)
      },
      immediate: true
    }
  },
  computed: {
    menuList() {
      const menuList = []
      this.$router.options.routes.forEach((route) => {
        console.log(route)
        menuList.push(route)
      })
      return menuList;
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'logout') {
        this.$router.push('/login')
      } else if (command === 'info') {
        this.$message.info('修改信息')
      }
    }
  }
}
</script>

<style lang="less">
@import './style/base.less';

.avator {
  color: white !important;
  display: flex;
  align-items: center;
  line-height: 50px;
  padding-top: 10px;
  cursor: pointer;
  margin: 0;
}
</style>
