import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // router.params 获取动态路径（:xxx）参数
      name: 'home',
      path: '/',
      component: () => import('@/views/home'),
      // 缓存已加载的页面
      meta: {
        keepAlive: true
      }
    },
    {
      name: 'my',
      path: '/my',
      component: () => import('@/views/my')
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/login')
    },
    {
      name: 'search',
      path: '/search',
      component: () => import('@/views/search')
    },
    {
      name: 'search-result',
      path: '/search/:q',
      component: () => import('@/views/search-result')
    },
    {
      name: 'shop-Car',
      path: '/shop-Car',
      component: () => import('@/views/shop-Car')
    },
    {
      name: 'order-sure',
      path: '/order-sure/:q',
      component: () => import('@/views/order-sure')
    },
    {
      name: 'commondity-detail',
      path: '/commondity-detail/:q',
      component: () => import('@/views/commondity-detail')
    },
    {
      name: 'commodity',
      path: '/commodity/:q',
      component: () => import('@/views/search')
    },
    {
      name: 'ressList',
      path: '/ressList',
      component: () => import('@/views/search')
    }
  ]
})
