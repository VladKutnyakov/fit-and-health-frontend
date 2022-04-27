export default {

  isAuthenticated (state) {
    return state.token ? true : false
  },

}
