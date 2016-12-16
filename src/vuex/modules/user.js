import * as types from '../types'
import localStore from '../../utils/localStore'

const state = {
  id: ''
}

const getters = {
}

const actions = {
  setAccount ({ commit }, user) {
    commit(types.SET_ACCOUNT, { user })
  },
  removeAccount ({ commit }) {
    commit(types.REMOVE_ACCOUNT)
  }
}

const mutations = {
  [types.SET_ACCOUNT] (state, {user}) {
    for (var k in user) {
      state[k] = user[k]
    }
    localStore.setItem('sloth.user', user)
  },
  [types.REMOVE_ACCOUNT] (state) {
    state = null
    localStore.rmItem('sloth.user')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
