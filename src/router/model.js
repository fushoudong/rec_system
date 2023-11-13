import ModelRouter from '@/views/models/index'
import ModelMainPage from '@/views/models/ModelMainPage'

export default {
  path: '/model',
  name: 'ModelRouter',
  component: ModelRouter,
  meta: {
    name: '模型',
    icon: 'el-icon-data-analysis'
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
