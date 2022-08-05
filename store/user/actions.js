import { errorHandler } from '@/utils/errorHandler'

export default {

  async fetchUserInfo ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/user/user-info`)

      commit('setUserInfo', response)
    } catch (error) {
      errorHandler(this, error, null, null)
    }
  },

}
