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
  setRecipes (state, Recipes) {
    state.recipes = Recipes
  }
}

export const actions = {
  async fetchRecipes ({ commit }) {
    try {
      // const Recipes = await this.$axios.$get('http://localhost:3030/api/recipes-book')

      // commit('setRecipes', Recipes)
      // console.log(Recipes)
    } catch (e) {
      console.log(e)
    }
  }
}
