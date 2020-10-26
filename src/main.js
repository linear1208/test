import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import TicTacToe from './TicTacToe'
import TodoList from './TodoList'
import Users from './Users'
import store from './store'
import Cart from './Cart'



Vue.config.productionTip = false

const routes = [
  {path : '/game',component:TicTacToe},
  {path : '/list',component:TodoList},
  {path : '/user',component:Users},
  {path : '/cart',component:Cart},
  {path : '*',redirect : '/game'},
]

new Vue({
  store,
  router: new VueRouter({routes}),
  render: h => h(App),
}).$mount('#app')
