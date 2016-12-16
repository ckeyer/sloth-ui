import * as types from '../types'

const state = {
  id: ''
}

const getters = {
}

const actions = {
  setAccount ({ commit }, user) {
    commit(types.SET_USER, { user })
  },
  removeAccount ({ commit }) {
    commit(types.REMOVE_USER)
  }
}

const mutations = {
  [types.SET_USER] (state, {user}) {
    for (var k in user) {
      state[k] = user[k]
    }
  },
  [types.REMOVE_USER] (state) {
    state = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
