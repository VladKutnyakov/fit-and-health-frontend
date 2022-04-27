export default {

  async fetchRecipe ({ commit }, recipe) {
    try {
      const Recipe = await this.$axios.$get(`${process.env.BASE_URL}/api/recipe/${recipe}`)

      commit('setRecipe', Recipe)
      // console.log(Recipe)
    } catch (err) {
      console.log(err)
    }
  },

}
