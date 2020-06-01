// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './assets/css/base.css'
import router from './router'
import store from './store/index'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
// router.beforeEach((to, from, next) => {
//   let path = to.redirectedFrom || to.path;
//   // 白名单 放行
//   if (whiteList.indexOf(path) >= 0) return next();
//   // 黑名单
//   if (!vuex.getters.roleRouter) return next({ path: '/login' });
//   if (!vuex.getters.isAddRoutes) {
//     console.log('path未注册,存在角色路由，立即注册尝试匹配');
//     router.addRoutes(vuex.getters.roleRouter);
//     vuex.dispatch('set_isAddRoutes', true);
//     next(path);
//   } else {
//     console.log('已注册过动态路由，尝试匹配');
//     next();
//   }
// });
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
