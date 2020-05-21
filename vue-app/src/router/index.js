import Vue from 'vue'
import Router from 'vue-router'
const Index = r => require.ensure([], () => r(require('@/page/Index')), 'Home');
const Home = r => require.ensure([], () => r(require('@/page/Home')), 'Home');
const Login = r => require.ensure([], () => r(require('@/page/Login')), 'Home');
const My = r => require.ensure([], () => r(require('@/page/My')), 'Home');
const Cart = r => require.ensure([], () => r(require('@/page/Cart')), 'Home');
const Discover = r => require.ensure([], () => r(require('@/page/Discover')), 'Home');
const Classify = r => require.ensure([], () => r(require('@/page/Classify')), 'Home');

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: 'index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/classify',
      name: 'classify',
      component: Classify
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
router.beforeEach((to, from, next) => {
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  next();
});

export default router;