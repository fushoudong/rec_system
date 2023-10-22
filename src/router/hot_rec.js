import HotRecommondRouter from '@/views/hot_rec/index'
import HotMainPage from '@/views/hot_rec/HotMainPage'
export default {
  path: '/hot_rec',
  name: 'HotRecommondRouter',
  component: HotRecommondRouter,
  redirect: '/hot_rec/index',
  meta: {
    name: '热门推荐',
    icon: 'el-icon-share'
  },
  children: [{
    path: 'index',
    name: 'HotMainPage',
    component: HotMainPage,
    meta: {
      name: '热门推荐',
      parent: 'HotRecommondRouter',

    }
  }]
}
