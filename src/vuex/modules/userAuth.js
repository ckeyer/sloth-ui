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
    localStore.setItem('sloth.user_auth', userauth)
    console.log('set user_auth', userauth)
    for (var k in userauth) {
      state[k] = userauth[k]
    }
  },
  [types.REMOVE_USER_AUTH] (state) {
    console.log('remove user_auth')
    localStore.rmItem('sloth.user_auth')
    state = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
