import GuessLikeRouter from '@/views/like/index'
import LikeMainPage from '@/views/like/LikeMainPage'

export default {
  path: '/like',
  name: 'GuessLikeRouter',
  component: GuessLikeRouter,
  meta: {
    name: '用户推荐',
    icon: 'el-icon-star-on'
  },
  children: [{
    path: 'index',
    name: 'LikeMainPage',
    component: LikeMainPage,
    meta: {
      name: '热门推荐',
      parent: 'GuessLikeRouter',
      
    }
  }]
}
