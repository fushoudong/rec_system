import SelfInfoRouter from '@/views/info/index'
import InfoMainPage from '@/views/info/InfoMainPage'

export default {
  path: '/info',
  name: 'SelfInfoRouter',
  component: SelfInfoRouter,
  meta: {
    name: '个人信息',
    icon: 'el-icon-info'
  },
  children: [{
    path: 'index',
    name: 'InfoMainPage',
    component: InfoMainPage,
    meta: {
      name: '个人信息',
      parent: 'SelfInfoRouter',
      
    }
  }]
}
