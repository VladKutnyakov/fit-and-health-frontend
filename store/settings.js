export const state = () => ({
  menuIsOpen: true,
  appTheme: null, // LIGTHT, DARK
})

export const getters = {}

export const mutations = {
  toggleMenuVisibility (state, condition) {
    state.menuIsOpen = condition
  },
}

export const actions = {}
