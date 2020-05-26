import Vue from "vue";
import Router from "vue-router";
// 引入一级组件
import Dashboard from '@/page/dashboard/Dashboard.vue'
import state from '../store/state';

// 懒加载二级组件 Tarbar
const Home = () => import('@/page/home/Home.vue');
const Location =  () => import("@/page/home/Location.vue")
const Map =  () => import("@/page/home/Map.vue")
const NewLocation =  () => import("@/page/home/NewLocation.vue")
const Secarch =  () => import("@/page/home/Secarch.vue")
const Index = r => require.ensure([], () => r(require("@/page/Index")), "Home");
const Login = r => require.ensure([], () => r(require("@/page/Login")), "Home");
const My = r => require.ensure([], () => r(require("@/page/My")), "Home");
const Cart = r => require.ensure([], () => r(require("@/page/Cart")), "Home");
const Discover = r => require.ensure([], () => r(require("@/page/Discover")), "Home");
const Classify = r =>require.ensure([], () => r(require("@/page/Classify")), "Home");

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/',
      redirect: '/Index',
      meta: {
          keepAlive: true
      },
    },{
      path: '/index',
      name: 'index',
      component: Index,
    },
    {
      // 根页面
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [{
        path: '/dashboard',
        redirect: '/dashboard/home',
        // 是否数据缓存
        meta: {
            keepAlive: true
        },
        },
        {
          path: "my",
          name: "my",
          meta: {  keepAlive: true, title: "我的" , isTabShow:true },
          component: My
        },{
          // 主页
          path: 'home',
          name: 'home',
          component: Home,
          // 是否数据缓存
          meta: {
              keepAlive: true,
              title: "",
              isLocaltion: true , isTabShow:true
          },
      },
      {
        path: "classify",
        name: "classify",
        meta: {  keepAlive: true, title: "分类" , isTabShow:true },
        component: Classify
      },
      {
        path: "discover",
        name: "discover",
        meta: {  keepAlive: true, title: "发现" , isTabShow:true },
        component: Discover
      },
      {
        path: "cart",
        name: "cart",
        meta: {  keepAlive: true, title: "购物车" , isTabShow:true },
        component: Cart
      },
      {
        path: "location",
        name: "location",
        meta: { isBack: true, keepAlive: true, title: "选择收货地址" , isTabShow:false },
        component: Location
      },
        {
          path: "secarch",
          name: "secarch",
          meta: { isTabShow:false},
          component: Secarch
        },
        {
          path: "newlocation",
          name: "newlocation",
          meta: { isBack: true, title: "添加地址", isTabShow:false },
          component: NewLocation
        },
        {
          path: "map",
          name: "map",
          meta: { isBack: true, title: "选择地址" , isTabShow:false},
          component: Map
        }
     ]
    }
  ]
});
router.beforeEach((to, from, next) => {
  console.log()
  // to: Route: 即将要进入的目标 路由对象
  // from: Route: 当前导航正要离开的路由
  // next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
  next();
});

export default router;
