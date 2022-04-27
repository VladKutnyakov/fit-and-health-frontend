export default {

  async fetchRecipes ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/recipes`)
      // console.log(response)

      commit('setRecipes', response.data)
    } catch (e) {
      console.log(e)
    }
  },

}
