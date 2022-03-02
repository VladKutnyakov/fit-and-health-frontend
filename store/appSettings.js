export const state = () => ({
  menuIsOpen: true,
  appTheme: null, // DARK, null
})

export const getters = {}

export const mutations = {
  toggleMenuVisibility (state, condition) {
    state.menuIsOpen = condition
  },
  toggleAppTheme (state) {
    const DocumentBody = document.querySelector('body')

    if (!state.appTheme) {
      state.appTheme = 'DARK'
      DocumentBody.classList.add('dark')
    } else {
      state.appTheme = null
      DocumentBody.classList.remove('dark')
    }
  },
}

export const actions = {}
