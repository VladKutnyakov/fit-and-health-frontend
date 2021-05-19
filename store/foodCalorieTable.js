const BASE_URL = process.env.BASE_URL

export const state = () => ({
  productCategories: ['Мясо', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
  products: [],
  sortedProducts: [],
  selectedFilters: {
    sortingBy: 'Названию',
    productType: 'Все продукты',
    productCategory: ['Мясо', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
    searchString: ''
  },
  newProduct: {
    title: "",
    weight: 100,
    protein: null,
    fats: null,
    carb: null,
    kkal: null,
    category: "Мясо",
    favorite: false,
  },
  modalActive: false
})

export const getters = {
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
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].userId) {
        userProducts += 1
      }
    }
    return userProducts
  }
}

export const mutations = {
  setProducts (state, products) {
    state.products = products
    this.commit('foodCalorieTable/sortProducts')
  },
  addNewProduct (state, payload) {
    payload.product.favorite = payload.favorite

    state.products.push(payload.product)
    this.commit('foodCalorieTable/sortProducts')

    const notice = {
      id: Date.now(),
      type: 'success',
      message: 'Продукт успешно добавлен.',
      timeToShow: 5000,
      active: true
    }
    this.commit('notifications/addNewNotice', notice)
  },
  updateProducts (state, newProduct) {
    let targetProduct = null
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === newProduct.id) {
        targetProduct = i
        state.products[i] = newProduct
        break
      }
    }
    this.commit('foodCalorieTable/sortProducts')

    const notice = {
      id: Date.now(),
      type: 'success',
      message: 'Информация о продукте успешно обновлена.',
      timeToShow: 5000,
      active: true
    }
    this.commit('notifications/addNewNotice', notice)
  },
  deleteProduct (state, productId) {
    let targetProduct = null
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === productId) {
        targetProduct = i
        break
      }
    }
    state.products.splice(targetProduct, 1)
    this.commit('foodCalorieTable/sortProducts')

    const notice = {
      id: Date.now(),
      type: 'info',
      message: 'Продукт удален из базы данных.',
      timeToShow: 5000,
      active: true
    }
    this.commit('notifications/addNewNotice', notice)
  },
  updateFavoriteProduct (state, updatedProduct) {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === updatedProduct.productId) {
        state.products[i].favorite = updatedProduct.favorite
        break
      }
    }
    this.commit('foodCalorieTable/sortProducts')

    const notice = {
      id: Date.now(),
      type: 'info',
      message: updatedProduct.favorite ? 'Продукт добавлен в избранное.' : 'Продукт удален из избранного.',
      timeToShow: 5000,
      active: true
    }
    this.commit('notifications/addNewNotice', notice)
  },
  setSearchString (state, searchString) {
    state.selectedFilters.searchString = searchString
  },
  setSortingByFilter (state, SortingBy) {
    state.selectedFilters.sortingBy = SortingBy
  },
  setProductTypeFilter (state, ProductType) {
    state.selectedFilters.productType = ProductType
  },
  setProductCategory (state, ProductCategory) {
    state.selectedFilters.productCategory = ProductCategory
  },
  sortProducts (state) {

    // Фильтрация по типу продуктов (все, мои, избранное)
    if (state.selectedFilters.productType === 'Мои продукты') {
      // console.log('Мои продукты')
      state.sortedProducts = [...state.products.filter(product => product.userId !== null)]
    } else if (state.selectedFilters.productType === 'Избранное') {
      // console.log('Избранное')
      state.sortedProducts = [...state.products.filter(product => product.favorite !== false)]
    } else {
      // console.log('Все продукты')
      state.sortedProducts = [...state.products]
    }

    // Фильтрация по строке поиска
    let sortedBySearchString =[]
    for (let i = 0; i < state.sortedProducts.length; i++) {
      if (state.sortedProducts[i].title.toLowerCase().includes(state.selectedFilters.searchString.toLowerCase())) {
        sortedBySearchString.push(state.sortedProducts[i])
      }
    }
    state.sortedProducts = [...sortedBySearchString]

    // // Фильтрация по категориям
    let sortedByCategory = []
    for (let i = 0; i < state.sortedProducts.length; i++) {
      // проверка на совпадение выбранных категорий у продукта в массиве state.sortedProducts
      // console.log(selectedFilters.productCategory);
      state.selectedFilters.productCategory.forEach(item => {
        if (item === state.sortedProducts[i].category) {
          sortedByCategory.push(state.sortedProducts[i])
        }
      })
    }
    state.sortedProducts = [...sortedByCategory]

    // Сортировка по колонкам (название, б, ж, у, к)
    if (state.selectedFilters.sortingBy === 'Названию') {
      state.sortedProducts.sort(function (a, b) {
        let first = a.title.toLowerCase(), second = b.title.toLowerCase()
        if (first < second) return -1
        if (first > second) return 1
        return 0
      })
    } else {
      let field = null
      switch (state.selectedFilters.sortingBy) {
        case 'Белкам':
          field = 'protein'
          console.log(field)
          break
        case 'Жирам':
          field = 'fats'
          break;
        case 'Углеводам':
          field = 'carb'
          break;
        case 'Калорийности':
          field = 'kkal'
          break
        default:
          break
      }

      state.sortedProducts.sort(function (a, b) {
        if (a[field] > b[field]) return -1
        if (a[field] < b[field]) return 1
        return 0
      })
    }

  },
  changeProductWeight (state, {index, newWeight}) {
    let product = {...state.sortedProducts[index]}
    product.weight = newWeight

    state.sortedProducts.splice(index, 1, product)
  },
  setNewProductParams (state, params) {
    state.newProduct[params.field] = params.value
  },
  openModal (state, productId) {
    if (productId) {
      state.newProduct = state.products.filter(product => product.id === productId)[0]
    } else {
      state.newProduct = {
        title: "",
        weight: 100,
        protein: null,
        fats: null,
        carb: null,
        kkal: null,
        category: "Мясо",
        favorite: false,
      }
    }
    state.modalActive = true
  },
  closeModal (state) {
    state.modalActive = false
  }
}

export const actions = {
  async getAllProducts ({ commit }) {
    try {
      const response = await this.$axios.$get(`${BASE_URL}/api/food-calorie-table`)

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      commit('setProducts', response.data)
    } catch (err) {
      console.log(err)
    }
  },
  async saveProduct ({ state, commit }) {
    try {
      const response = await this.$axios.$post(`${BASE_URL}/api/food-calorie-table/save-product`, state.newProduct)

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      commit('addNewProduct', response.data)
    } catch (err) {
      console.log(err)
    }
  },
  async removeProduct ({ commit }, product) {
    try {
      const response = await this.$axios.$post(`${BASE_URL}/api/food-calorie-table/remove-product`, product)

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      if (response.data.removed) {
        await commit('deleteProduct', response.data.productId)
      } else {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: 'Удалить продукт не удалось.',
          timeToShow: 5000,
          active: true
        }
        this.commit('notifications/addNewNotice', notice)
      }
    } catch (err) {
      console.log(err)
    }
  },
  async changeFavoriteParam ({ commit }, productId) {
    try {
      const response = await this.$axios.$post(`${BASE_URL}/api/food-calorie-table/change-favorite-param`, {productId: productId})

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      commit('updateFavoriteProduct', response.data)
    } catch (err) {
      console.log(err)
    }
  }
}
