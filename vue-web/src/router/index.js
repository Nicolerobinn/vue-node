import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('@/page/Index')), 'Index');
const Login = r => require.ensure([], () => r(require('@/page/Login')), 'Login');
const page404 = r => require.ensure([], () => r(require('@/page/page404')), 'page404');
const Home = r => require.ensure([], () => r(require('@/page/Home')), 'Home');
Vue.use(Router)

const createRouter = () => new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/Index'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/',
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
})
const router = createRouter()
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher
}
export default router