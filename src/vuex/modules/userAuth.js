import * as types from '../types'
import localStore from '../../utils/localStore'

const state = {
  id: ''
}

const getters = {
}

const actions = {
  setUserAuth ({ commit }, userauth) {
    commit(types.SET_USER_AUTH, { userauth })
  },
  removeUserAuth ({ commit }) {
    commit(types.REMOVE_USER_AUTH)
  }
}

const mutations = {
  [types.SET_USER_AUTH] (state, {userauth}) {
    for (var k in userauth) {
      state[k] = userauth[k]
    }
    localStore.setItem('sloth.user_auth', userauth)
  },
  [types.REMOVE_USER_AUTH] (state) {
    state = null
    localStore.rmItem('sloth.user_auth')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
