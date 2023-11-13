import DatasetRouter from '@/views/dataset/index'
import DataSetMainPage from '@/views/dataset/DataSetMainPage'

export default {
  path: '/dataset',
  name: 'DatasetRouter',
  component: DatasetRouter,
  meta: {
    name: '数据集',
    icon: 'el-icon-s-data'
  },
  children: [{
    path: 'index',
    name: 'DataSetMainPage',
    component: DataSetMainPage,
    meta: {
      name: '数据集',
      parent: 'DatasetRouter',
      
    }
  }]
}
