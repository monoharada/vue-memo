import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter) // VueRouterを使うことをVueに知らせる

const router = new VueRouter(routes) // ルーターインスタンスの作成

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router // router にルーターインスタンスを指定
})
