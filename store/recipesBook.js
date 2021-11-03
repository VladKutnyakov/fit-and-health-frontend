export const state = () => ({
  recipes: [
    {
      id: 1,
      title: 'title',
      description: 'desc',
      cookingTimes: '124',
      products: [
        {
          id: 0,
          title: 'dfhgdfh',
          weight: 100,
          protein: 1,
          fats: 0.5,
          carb: 45,
          kkal: 321,
          category: 'category',
          favorite: true,
          userProduct: true,
          userId: null,
          weightInRecipe: 9
        }
      ],
      cookingSkill: 2,
    }
  ]
})

export const getters = {
  getRecipes (state) {
    return state.recipes
  }
}

export const mutations = {
  setRecipes (state, fetchedRecipes) {
    state.recipes = fetchedRecipes
  }
}

export const actions = {
  async fetchRecipes ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/recipes-book`)
      // console.log(response)

      // commit('setRecipes', response.data)
    } catch (e) {
      console.log(e)
    }
  }
}
