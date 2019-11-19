import Vue from 'vue'
import Router from 'vue-router'
// 引入首页
import Layout from '@/layout'
Vue.use(Router)

export const constantRoutes = [
  // 登录页面暂时先不用
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  //主页导航guide
  {
    path: '/home',
    component: () => import('@/views/home/guide'),
    hidden: true
  },

  //功能页面
  {
    path: '/',
    component: Layout,
    // redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '查询统计', icon: 'query' }
    }]
  },
  {
    path: '/query',
    component: Layout,
    meta: { title: '输入法搜索', icon: 'keyboard' },
    children: [
      {
      path: 'query',
      name: 'query',
      component: () => import('@/views/test/index'),
      meta: { title: '输入法搜索1', icon: 'keyboard' }
     },
     {
      path: 'query2',
      name: 'query2',
      component: () => import('@/views/test/index'),
      meta: { title: '输入法搜索2', icon: 'keyboard' }
     },
  ]
  },


]

//创建一个路由实例
const createRouter = () => new Router({
  // mode: 'history', // require service support
  //对于所有路由导航，简单地让页面滚动到顶部。
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

//路由守卫
router.beforeEach((to, from, next) => {
   let token = window.sessionStorage.getItem('token')
      if (to.path === '/login') {
        next()
      } else {
        if (!token) {
          next({ path: '/login' })
        } else {
          next()
        }
      }
    })
// reset router
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher 
}

export default router