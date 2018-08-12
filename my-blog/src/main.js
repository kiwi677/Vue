// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import VueResource from 'vue-resource'
import axios from 'axios'

// 全局配置URL
axios.defaults.baseURL = 'https://vue-blog-168b4.firebaseio.com'
// 配置请求头
// axios.defaults.headers.commom['Authorization'] = 'Token'
// 配置POST/GET请求头
// axios.defaults.headers.post['Content-type'] = 'application/urlencode'
// axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.config.productionTip = false
// Vue.use(VueResource)
// 自定义指令
// Vue.directive('rainbow', {
//   bind (el, binding, vnode) {
//     el.style.color = '#' + Math.random().toString(16).slice(2, 8)
//   }
// })
Vue.directive('theme', {
  bind (el, binding, vnode) {
    if (binding.value === 'wide') {
      el.style.maxWidth = '1260px'
    } else if (binding.value === 'narrow') {
      el.style.maxWidth = '560px'
    }
    if (binding.arg === 'column') {
      el.style.background = '#6677cc'
      el.style.padding = '20px'
    }
  }
})
// 过滤器
// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase()
// })
Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + '...'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
