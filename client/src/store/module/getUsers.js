import Vue from 'vue'
import Vuex from 'vuex'
import {
  USERS,
  USERS_REQUEST,
  USERS_RESPONSE,
  USERS_ERRORS,
  SINGLE_USER_RESPONSE,
  USER_BY_ID,
  GET_USER_BY_ID
} from '../../../constants'
import {getAllUsers, getUserById} from '../../api/rest/usersService.js'
import logger from "vuex/dist/logger";

Vue.use(Vuex)

const getUsersModule = {
  state: {
    users: [],
    isFetching: false,
    error: null
  },
  mutations: {
    [USERS_REQUEST](state) {
      state.isFetching = true
    },
    [USERS_RESPONSE](state, users) {
      state.users = users
      state.isFetching = false
      state.error = null
    },
    [USERS_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    },
    [SINGLE_USER_RESPONSE](state, user) {
      const userIndex = state.users.findIndex(u => u._id === user._id)
      if (userIndex === -1) {
        state.users.push(user)
      } else {
        state.users[userIndex] = {...state.users[userIndex], ...user}
      }
      state.isFetching = false
      state.error = null
    }
  },
  actions: {
    async [USERS]({commit}) {
      commit(USERS_REQUEST)
      try {
        const {data} = await getAllUsers()
        commit(USERS_RESPONE, data)
      } catch (e) {
        commit(USERS_ERRORS, e)
      }
    },
    async [USER_BY_ID]({commit}, id) {
      commit(USERS_REQUEST)
      try {
        const {data} = await getUserById(id)
        commit(SINGLE_USER_RESPONSE, data)
      } catch (e) {
        commit(USERS_ERRORS, e)
      }
    }
  },
  getters: {
    [GET_USER_BY_ID]: state => id => state.users.find(u => u._id === id)
  }
}
