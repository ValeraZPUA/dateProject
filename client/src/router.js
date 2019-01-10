import Vue from 'vue'
import Router from 'vue-router'
import NewUser from './views/NewUser/NewUser.vue'
import Users from './views/Users/Users.vue'
import Login from './views/Login/Login.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/newuser',
      name: 'newuser',
      component: NewUser
    }
  ]
})
