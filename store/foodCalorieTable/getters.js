export default {

  getFavoriteAmount (state) {
    let favoriteAmount = 0
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].favorite) {
        favoriteAmount += 1
      }
    }
    return favoriteAmount
  },

  getUserProductsAmount (state) {
    let userProducts = 0
    // console.log(state.products);
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].user?.id) {
        userProducts += 1
      }
    }
    return userProducts
  },

}
