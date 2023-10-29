import ModelRouter from '@/views/models/index'
import ModelMainPage from '@/views/models/ModelMainPage'

export default {
  path: '/model',
  name: 'ModelRouter',
  component: ModelRouter,
  meta: {
    name: 'Echarts',
    icon: 'el-icon-star-on'
  },
  children: [{
    path: 'index',
    name: 'ModelMainPage',
    component: ModelMainPage,
    meta: {
      name: 'Charts',
      parent: 'ModelRouter',
      
    }
  }]
}
