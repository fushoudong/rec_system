// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Echarts from 'echarts'

Vue.config.productionTip = false
// 样式组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import moment from 'moment'
import {
  SessionStorage
} from 'wii-fe-utils' // 跨页面用的sess，主要用于鉴权
Vue.use(ElementUI)
// Vue.use(Echarts)
Vue.use(moment)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
