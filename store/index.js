export const state = () => ({
  user: {
    email: ''
  }
})

export const mutations = {
  SET_USER (state, { user }) {
    state.user = user
  }
}

export const actions = {
  setUser ({ commit }, { user }) {
    commit('SET_USER', { user })
  }
}
