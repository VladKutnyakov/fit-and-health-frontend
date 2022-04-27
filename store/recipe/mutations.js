export default {

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
  },

}
