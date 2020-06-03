// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './utils/rem'
import './assets/css/base.css'
import App from './App'
import router from './router'
import store from './store/index'
// require('./mock');
import waterfall from 'vue-waterfall2'
Vue.use(waterfall)
Vue.config.productionTip = false
import 'vant/lib/index.css';
import Vant,{Lazyload} from 'vant';
Vue.use(Lazyload)
import { Toast } from 'vant';
import { Dialog } from 'vant';
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(Vant);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
