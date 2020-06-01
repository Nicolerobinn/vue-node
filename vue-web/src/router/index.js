import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('@/page/Index')), 'Index');
const Login = r => require.ensure([], () => r(require('@/page/Login')), 'Login');
const page404 = r => require.ensure([], () => r(require('@/page/page404')), 'page404');
const Home = r => require.ensure([], () => r(require('@/page/Home')), 'Home');
Vue.use(Router)

export const currencyRoutes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/login',
    name: '登录',
    component: Login
  },
  {
    path: '/index',
    component: Index,
    name: '首页',
    meta: { icon: 'el-icon-excel iconfont', title: '首页' },
    children: [
        {
            path: '/home',
            name: '用户',
            meta: {
                keepAlive: true
            },
            children: [
            ],
            component:Home
        },
    ]
  },
  {
    path: '/404',
    component: page404
  },
  {
    path: '*',
    redirect: '/404'
  },
]
export const asyncRoutes =[
  {
    path: '/',
    redirect: '/Index'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Index',
    component: Index,
    children: [
        {
            path: '/home',
            name: '首页1',
            meta: {
                keepAlive: true
            },
            component:Home
        },
        {
            path: '/home2',
            name: '首页2',
            meta: {
                keepAlive: true
            },
            component:Home
        },
        {
            path: '/home3',
            name: '首页3',
            meta: {
                keepAlive: true
            },
            component:Home
        },
    ]
  },
  {
    path: '/404',
    component: page404
  },
  {
    path: '*',
    redirect: '/404'
  },
]

const creatRouter = () => {
  return new Router({
    routes: currencyRoutes,
    scrollBehavior() {
      return { x: 0, y: 0 }
    }
  })
}

const router = creatRouter()

// 解决addRoute不能删除动态路由问题
export function resetRouter() {
  const reset = creatRouter()
  router.matcher = reset.matcher
}
export default router

