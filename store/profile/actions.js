import { errorHandler } from '@/utils/errorHandler'

export default {

  async fetchUserInfo ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/profiles/user-info`)

      commit('setUserInfo', response)
    } catch (error) {
      errorHandler(this, error, null, null)
    }
  },

  async fetchProfileInfo ({ commit }, userId) {
    try {
      // console.log(`${process.env.BASE_URL}/api/profile/${userId}`)
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/profiles/${userId || ''}`)

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      if (response.data) {
        commit('setProfileInfo', response.data)
      }
    } catch (err) {
      console.log(err)
    }
  },

}
