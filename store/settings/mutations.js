import Cookies from 'js-cookie'

export default {

  toggleMenuVisibility (state, condition) {
    state.menuIsOpen = condition
  },

  setAppTheme (state, payload) {
    state.appTheme = payload
    Cookies.set('appTheme', payload, { expires: 365 * 10 })
  },

}
