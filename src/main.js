import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import Vuex from 'vuex'
import _store from './store'

Vue.use(VueRouter) // VueRouterを使うことをVueに知らせる
Vue.use(Vuex)

const router = new VueRouter(routes) // ルーターインスタンスの作成

const store = new Vuex.Store(_store)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router, // router にルーターインスタンスを指定
  store
})
