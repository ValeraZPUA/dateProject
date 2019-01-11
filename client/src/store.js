import Vue from 'vue'
import Vuex from 'vuex'
import * as constants from '../constants.js'
import {
  getAllUsers,
  getUserById,
  login,
  createUser,
  updateUser,
  deleteUser,
  uploadPhoto,
  deletePhoto
} from './api/rest/usersService'

Vue.use(Vuex)

const authModule = {
  state: {
    users: [],
    isFetching: false,
    error: null
  },
  mutations: {
    [constants.LOGIN_REQUEST](state) {
      state.isFetching = true
    },
    [constants.LOGIN_RESPONSE](state, users) {
      state.users = users
      localStorage.setItem('Access Token', state.users.token)
      localStorage.setItem('id', state.users.user.id)
      state.isFetching = false
      state.error = null
    },
    [constants.LOGIN_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    }
  },
  actions: {
    async [constants.LOGIN]({commit}, formData) {
      commit(constants.LOGIN_REQUEST)
      try {
        const {data} = await login(formData)
        commit(constants.LOGIN_RESPONSE, data)
      } catch (e) {
        commit(constants.LOGIN_ERRORS, e)
      }
    }
  }
}

const userModule = {
  state: {
    users: [],
    isFetching: false,
    error: null
  },
  mutations: {
    [constants.USERS_REQUEST](state) {
      state.isFetching = true
    },
    [constants.USERS_RESPONSE](state, users) {
      state.users = users
      state.isFetching = false
      state.error = null
    },
    [constants.USERS_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    },
    [constants.SINGLE_USER_RESPONSE](state, user) {
      const userIndex = state.users.findIndex(u => u._id === user._id)
      if (userIndex === -1) {
        state.users.push(user)
      } else {
        state.users[userIndex] = {...state.users[userIndex], ...user}
      }
      state.isFetching = false
      state.error = null
    },
    [constants.NEW_USER_REQUEST](state) {
      state.isFetching = true
    },
    [constants.NEW_USER_RESPONSE](state, users) {
      state.users = users
      state.isFetching = false
      state.error = null
    },
    [constants.NEW_USER_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    },
    [constants.UPDATE_USER_REQUEST](state) {
      state.isFetching = true
    },
    [constants.UPDATE_USER_RESPONSE](state, users) {
      state.users = users
      state.isFetching = false
      state.error = null
    },
    [constants.UPDATE_USER_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    },
    [constants.DELETE_USER_REQUEST](state) {
      state.isFetching = true
    },
    [constants.DELETE_USER_RESPONSE](state, users) {
      state.users = users
      localStorage.removeItem('Access Token')
      localStorage.removeItem('id')
      state.isFetching = false
      state.error = null
    },
    [constants.DELETE_USER_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    }
  },
  actions: {
    async [constants.USERS]({commit}) {
      commit(constants.USERS_REQUEST)
      try {
        const {data} = await getAllUsers()
        commit(constants.USERS_RESPONSE, data)
      } catch (e) {
        commit(constants.USERS_ERRORS, e)
      }
    },
    async [constants.USER_BY_ID]({commit}, id) {
      commit(constants.USERS_REQUEST)
      try {
        const {data} = await getUserById(id)
        commit(constants.SINGLE_USER_RESPONSE, data)
      } catch (e) {
        commit(constants.USERS_ERRORS, e)
      }
    },
    async [constants.NEW_USER]({commit}, formData) {
      commit(constants.NEW_USER_REQUEST)
      try {
        const {data} = await createUser(formData)
        commit(constants.NEW_USER_RESPONSE, data)
      } catch (e) {
        commit(constants.NEW_USER_ERRORS, e)
      }
    },
    async [constants.UPDATE_USER]({commit}, formData) {
      commit(constants.UPDATE_USER_REQUEST)
      try {
        const {data} = await updateUser(formData)
        commit(constants.UPDATE_USER_RESPONSE, data)
      } catch (e) {
        commit(constants.UPDATE_USER_ERRORS, e)
      }
    },
    async [constants.DELETE_USER]({commit}) {
      commit(constants.DELETE_USER_REQUEST)
      try {
        const {data} = await deleteUser()
        commit(constants.DELETE_USER_RESPONSE, data)
      } catch (e) {
        commit(constants.DELETE_USER_ERRORS, e)
      }
    }
  },
  getters: {
    [constants.GET_USER_BY_ID]: state => id => state.users.find(u => u._id === id)
  }
}

const photoModule = {
  state: {
    photos: [],
    isFetching: false,
    error: null
  },
  mutations: {
    [constants.NEW_PHOTO_REQUEST](state) {
      state.isFetching = true
    },
    [constants.NEW_PHOTO_RESPONSE](state, photos) {
      state.photos = photos
      state.isFetching = false
      state.error = null
    },
    [constants.NEW_PHOTO_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    },
    [constants.DELETE_PHOTO_REQUEST](state) {
      state.isFetching = true
    },
    [constants.DELETE_PHOTO_RESPONSE](state, photos) {
      state.photos = photos
      state.isFetching = false
      state.error = null
    },
    [constants.DELETE_PHOTO_ERRORS](state, error) {
      state.error = error
      state.isFetching = false
    }
  },
  actions: {
    async [constants.NEW_PHOTO]({commit}, formData) {
      commit(constants.NEW_PHOTO_REQUEST)
      try {
        const {data} = await uploadPhoto(formData)
        commit(constants.NEW_PHOTO_RESPONSE, data)
      } catch (e) {
        commit(constants.NEW_PHOTO_ERRORS, e)
      }
    },
    async [constants.DELETE_PHOTO]({commit}) {
      commit(constants.DELETE_PHOTO_REQUEST)
      try {
        const {data} = await deletePhoto()
        commit(constants.DELETE_PHOTO_RESPONSE, data)
      } catch (e) {
        commit(constants.DELETE_PHOTO_ERRORS, e)
      }
    }
  }
}

export default new Vuex.Store({
  modules: {
    authMod: authModule,
    userMod: userModule,
    photoMod: photoModule
  }
})
