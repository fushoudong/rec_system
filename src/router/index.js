import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Register from '@/views/register/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Default',
      redirect: '/login',
      meta: {
        name: '首页'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
