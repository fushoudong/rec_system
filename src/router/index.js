import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/index'
import Register from '@/views/register/index'
import ForgetPassword from '@/views/password/index'
import HotRecommondRouter from './hot_rec'
import RateHistoryRouter from './history'
import GuessLikeRouter from './like'
import SelfInfoRouter from './info'
import ModelRouter from './model.js'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Default',
      redirect: '/login',
      meta: {
        name: '首页',
        hidden: true
      }
    },
    {
      path: '/index',
      name: 'Index',
      redirect: '/hot_rec',
      meta: {
        hidden: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        hidden: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        hidden: true
      }
    },
    {
      path: '/password',
      name: 'Password',
      component: ForgetPassword,
      meta: {
        hidden: true
      }
    },
    ModelRouter,
    HotRecommondRouter,
    RateHistoryRouter,
    GuessLikeRouter,
    SelfInfoRouter
  ]
})
