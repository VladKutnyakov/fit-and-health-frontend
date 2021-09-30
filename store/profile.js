const BASE_URL = process.env.BASE_URL

export const state = () => ({
  profileInfo: {
    id: null,
    firstName: null,
    middleName: null,
    lastName: null,
    birthday: null,
    phone: null,
    gender: null,
    weight: null,
    height: null,
    city: null,
    site: null,
    vk: null,
    facebook: null,
    instagram: null,
    youtube: null,
    twitter: null,
    skype: null
  }
})

export const getters = {}

export const mutations = {
  setProfileInfo (state, ProfileInfo) {
    state.profileInfo = ProfileInfo
  },
}

export const actions = {
  async fetchProfileInfo ({ commit }, userId) {
    try {
      // console.log(`${BASE_URL}/api/profile/${userId}`)
      const response = await this.$axios.$get(`${BASE_URL}/api/profile/${userId}`)

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      commit('setProfileInfo', response.data)
    } catch (err) {
      console.log(err)
    }
  }
}
