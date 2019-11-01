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
      component: () => import('@/views/my'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'search',
      path: '/search',
      component: () => import('@/views/search'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'search-result',
      path: '/search/:q',
      component: () => import('@/views/search-result'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'shop-Car',
      path: '/shop-Car',
      component: () => import('@/views/shop-Car'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'order-sure',
      path: '/order-sure/',
      component: () => import('@/views/order-sure'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'commondity-detail',
      path: '/commondity-detail/:id',
      component: () => import('@/views/commondity-detail'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'commodity',
      path: '/commodity/:id',
      component: () => import('@/views/commodity'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'addressList',
      path: '/addressList',
      component: () => import('@/views/addressList'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'activeList',
      path: '/activeList',
      component: () => import('@/views/activeList'),
      meta: {
        keepAlive: false
      }
    },
    {
      name: 'orderList',
      path: '/orderList',
      component: () => import('@/views/orderList'),
      meta: {
        keepAlive: false
      }
    }
  ]
})
