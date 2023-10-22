import RateHistoryRouter from '@/views/history/index'
import HistoryMainPage from '@/views/history/HistoryMainPage'

export default {
  path: '/history',
  name: 'RateHistoryRouter',
  component: RateHistoryRouter,
  meta: {
    name: '评分历史',
    icon: 'el-icon-s-data'
  },
  children: [{
    path: 'index',
    name: 'HistoryMainPage',
    component: HistoryMainPage,
    meta: {
      name: '热门推荐',
      parent: 'RateHistoryRouter',
      
    }
  }]
}
