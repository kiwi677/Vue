// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../mock/index'
import axios from 'axios'

axios.defaults.baseURL = 'https://vue-blog-168b4.firebaseio.com'

Vue.directive('imgUrl', {
  bind (el, binding, vnode) {
    var reg = /https:\/\//g
    var changeUrl = el.getAttribute('src').replace(reg, 'https://images.weserv.nl/?url=')
    el.setAttribute('src', changeUrl)
  }
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
