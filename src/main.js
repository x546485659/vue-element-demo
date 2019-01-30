// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Ajax from './ajax/Ajax'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'


Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.prototype.Ajax = Ajax
Vue.use(ElementUI)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
