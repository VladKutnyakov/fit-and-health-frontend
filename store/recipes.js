export const state = () => ({
  recipes: []
})

export const getters = {}

export const mutations = {
  setRecipes (state, fetchedRecipes) {
    state.recipes = fetchedRecipes
  }
}

export const actions = {
  async fetchRecipes ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/recipes`)
      // console.log(response)

      commit('setRecipes', response.data)
    } catch (e) {
      console.log(e)
    }
  }
}
