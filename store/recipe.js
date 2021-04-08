const BASE_URL = process.env.baseUrl

export const state = () => ({
  recipe: {
    id: 0,
    title: 'ldskfjgh',
    description: 'gfjfdjhfgjhfghj',
    cookingTimes: 654,
    cookingSkill: 4,
    portions: 54,
    likes: 65,
    dislikes: 25,
    shares: 14,
    marks: ['asd'],
    media: '',
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
    cookingSteps: [],
    userId: 1
  }
})

export const getters = {}

export const mutations = {
  setRecipe (state, Recipe) {
    state.recipe = Recipe
  },
  updateProductWeight (state, newProductWeight) {
    for (let i = 0; i < state.recipe.products.length; i++) {
      if (state.recipe.products[i].id === newProductWeight.id) {
        state.recipe.products[i].weight = newProductWeight.weight
        break
      }
    }
  }
}

export const actions = {
  async fetchRecipe ({ commit }, recipe) {
    try {
      const Recipe = await this.$axios.$get(`${BASE_URL}/api/recipe/${recipe}`)

      commit('setRecipe', Recipe)
      // console.log(Recipe)
    } catch (err) {
      console.log(err)
    }
  }
}
