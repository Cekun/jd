import Vue from 'vue'
import Router from 'vue-router'
import Register from './views/Register.vue'
import Index from './views/Index.vue'
import List from './views/List.vue'
import Botnav from './views/Botnav.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
      path: '/',
      name: 'login',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('./views/Index.vue')
    },
    {
      path: '/botnav',
      name: 'botnav',
      component:Botnav,
      children:[
        {
          path: 'index',
          name: 'index',
          component: Index
        },
        {
          path: 'list',
          name: 'list',
          component: List
        },
        {
          path: 'search',
          name: 'search',
          component: () => import('./views/Search.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          meta:{
            requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
          },
          component: () => import('./views/Cart.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          meta:{
            requireAuth:true,//当有这个字段的时候，我们就认为他这个路由页面是要有登录权限的
          },
          component: () => import('./views/Mine.vue')
        },
      ]
    },
  ]
})

