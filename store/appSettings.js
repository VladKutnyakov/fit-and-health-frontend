export const state = () => ({
  menuIsOpen: true,
  appTheme: 'DARK', // DARK, null
})

export const getters = {}

export const mutations = {
  toggleMenuVisibility (state, condition) {
    state.menuIsOpen = condition
  },
  setAppTheme (state, payload) {
    state.appTheme = payload.theme
  },
  // toggleAppTheme (state) {
  //   const DocumentBody = document.querySelector('body')

  //   if (!state.appTheme) {
  //     state.appTheme = 'DARK'
  //     DocumentBody.classList.add('dark')
  //   } else {
  //     state.appTheme = null
  //     DocumentBody.classList.remove('dark')
  //   }
  // },
}

export const actions = {

  async fetchAppTheme ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/settings/fetch-app-theme`)

      commit('setAppTheme', response)
    } catch (error) {
      commit('setAppTheme', { theme: null })
    }
  },

}
