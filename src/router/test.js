import TestRouter from '@/views/test/index'
import TestMainPage from '@/views/test/TestMainPage'

export default {
  path: '/test',
  name: 'TestRouter',
  component: TestRouter,
  meta: {
    name: '测试界面',
    icon: 'el-icon-s-data'
  },
  children: [{
    path: 'index',
    name: 'TestMainPage',
    component: TestMainPage,
    meta: {
      name: '热门推荐',
      parent: 'TestRouter',
      
    }
  }]
}
