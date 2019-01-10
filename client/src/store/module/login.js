import {
  LOGIN,
  LOGIN_ERRORS,
  LOGIN_REQUEST,
  LOGIN_RESPONSE
} from "../../../constants";
import {login} from "../../api/rest/usersService.js";

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
