import ComRouter from '@/views/com/index'
import ComMainPage from '@/views/com/ComMainPage'

export default {
  path: '/com',
  name: 'ComRouter',
  component: ComRouter,
  meta: {
    name: '模型对比',
    icon: 'el-icon-s-data'
  },
  children: [{
    path: 'index',
    name: 'ComMainPage',
    component: ComMainPage,
    meta: {
      name: '模型对比',
      parent: 'ComRouter',
      
    }
  }]
}
