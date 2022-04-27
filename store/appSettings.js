export const state = () => ({
  menuIsOpen: true,
  appTheme: null, // DARK, null
})

export const getters = {}

export const mutations = {
  toggleMenuVisibility (state, condition) {
    state.menuIsOpen = condition
  },
  setAppTheme (state, payload) {
    state.appTheme = payload.browserTheme
  },
}

export const actions = {

  async fetchAppTheme ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/settings/fetch-app-theme`)

      commit('setAppTheme', response)
    } catch (error) {
      commit('setAppTheme', { browserTheme: null })
    }
  },

  async setAppTheme ({ commit }, payload) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/settings/set-app-theme`, payload)

      commit('setAppTheme', response)
    } catch (error) {
      commit('setAppTheme', { theme: null })
    }
  },

}
