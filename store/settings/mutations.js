export default {

  toggleMenuVisibility (state, condition) {
    state.menuIsOpen = condition
  },

  setAppTheme (state, payload) {
    state.appTheme = payload.browserTheme
  },

}
