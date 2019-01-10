import Vue from 'vue'
import Vuex from 'vuex'
import {
  LOGIN, LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_ERRORS,
  USERS, USERS_REQUEST, USERS_RESPONSE, USERS_ERRORS, SINGLE_USER_RESPONSE, USER_BY_ID, GET_USER_BY_ID,
  NEW_USER, NEW_USER_ERRORS, NEW_USER_REQUEST, NEW_USER_RESPONSE
} from '../constants'
import {getAllUsers, getUserById, login, createUser} from "./api/rest/usersService";

Vue.use(Vuex)

const authModule = {
  state: {
    users: [],
    isFetching: false,
    error: null
  },
  mutations: {
    [LOGIN_REQUEST](state) {
      state.isFetching = true
    },
    [LOGIN_RESPONSE](state, users) {
      state.users = users
      localStorage.setItem('Access Token', state.users.token);
      state.isFetching = false
      state.error = null
    },
    [LOGIN_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    }
  },
  actions: {
    async [LOGIN]({commit}, formData) {
      commit(LOGIN_REQUEST)
      try {
        const {data} = await login(formData)
        commit(LOGIN_RESPONSE, data)
      } catch (e) {
        commit(LOGIN_ERRORS, e)
      }
    }
  }
}

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
        commit(USERS_RESPONSE, data)
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

const createUserModule = {
  state: {
    users: [],
    isFetching: false,
    error: null
  },
  mutations: {
    [NEW_USER_REQUEST](state) {
      state.isFetching = true
    },
    [NEW_USER_RESPONSE](state, users) {
      state.users = users
      state.isFetching = false
      state.error = null
    },
    [NEW_USER_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    }
  },
  actions: {
    async [NEW_USER]({commit}, formData) {
      commit(NEW_USER_REQUEST)
      try {
        const {data} = await createUser(formData)
        commit(NEW_USER_RESPONSE, data)
      } catch (e) {
        commit(NEW_USER_ERRORS, e)
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    auth: authModule,
    getUsers: getUsersModule,
    createNewUser: createUserModule
  }
})
