// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import chalk from 'chalk'

import "./assets/css/index.css"
import Loading from './plugins/loading.js'


Vue.config.errorHandler = function (err, vm, info) {
  console.log(info);
}



Vue.config.productionTip = false
Vue.use(Loading);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
