// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 加载 mint-ui
import Mint from 'mint-ui';
Vue.use(Mint);
import './lib/mint-ui/style.min.css'

// 下拉刷新
import PullTo from 'vue-pull-to'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
