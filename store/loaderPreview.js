const BASE_URL = process.env.baseUrl

export const state = () => ({
  isActive: false,
  message: ''
})

export const getters = {}

export const mutations = {
  setIsActive (state, condition) {
    state.isActive = condition
  },
  setLoaderMessage (state, message) {
    state.message = message
  },
  updateLoader (state, ctx) {
    state.isActive = ctx.isActive
    state.message = ctx.message
  }
}

export const actions = {}
