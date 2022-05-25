export default {

  async login ({ commit }, payload) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/auth/login/`, payload)

      commit('setAccessToken', response)
      commit('setModalVisibility', { modal: 'authModalActive', condition: false })
    } catch (err) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: err.response.data.message,
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async register ({ commit }, payload) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/auth/register/`, payload)

      commit('setAccessToken', response)
    } catch (err) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: err.response.data.message,
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async logout ({ commit }, payload) {
    try {
      const response = await this.$axios.$delete(`${process.env.BASE_URL}/api/auth/logout/`)

      commit('clearAccessToken')
    } catch (err) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: err.response.data.message,
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async fetchAuthUserInfo ({ commit }) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/auth/auth-user-info`)

      commit('setAuthUserInfo', response)
    } catch (err) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: err.response.data.message,
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
