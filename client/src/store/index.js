import Vue from 'vue'
import Vuex from 'vuex'
import authModule from './module/login.js'
import getUsers from './module/getUsers.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authModule
  }
})
