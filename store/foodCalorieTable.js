import { formGenerator } from '../utils/formGenerator'

export const state = () => ({
  productCategories: [],
  // productCategories: ['Мясо', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
  products: [],
  sortedProducts: [],
  pinnedProducts: [],
  notPinnedProducts: [],
  selectedFilters: {
    sortingBy: 'Названию',
    productType: 'Все продукты',
    productCategory: [],
    // productCategory: ['Мясо', 'Морепродукты', 'Яйца, яичные продукты', 'Молоко, молочные продукты', 'Соя, соевые продукты', 'Овощи, овощные продукты', 'Зелень, травы, листья, салаты', 'Фрукты, ягоды, сухофрукты', 'Грибы', 'Жиры, масла', 'Орехи', 'Крупы, злаки', 'Семена', 'Специи, пряности', 'Мука, продукты из муки', 'Напитки, соки'],
    searchString: ''
  },

  productForm: formGenerator({
    title: null,
    weight: 100,
    protein: null,
    fats: null,
    carb: null,
    kkal: null,
    category: null,
    favorite: false,
    pinned: false
  }),
  modalCondition: 'create',
  productModalActive: false
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
    // console.log(state.products);
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].user?.id) {
        userProducts += 1
      }
    }
    return userProducts
  }
}

export const mutations = {
  setProductCategories (state, categories) {
    state.productCategories = categories
    state.selectedFilters.productCategory = categories
  },
  setProducts (state, products) {
    state.products = products
    this.commit('foodCalorieTable/sortProducts')
  },
  addNewProduct (state, payload) {
    state.products.push(payload)
    this.commit('foodCalorieTable/sortProducts')
  },
  updateProduct (state, product) {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === product.id) {
        state.products.splice(i, 1, product)
        break
      }
    }
    this.commit('foodCalorieTable/sortProducts')
  },
  deleteProduct (state, productId) {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === parseInt(productId)) {
        state.products.splice(i, 1)
        break
      }
    }
    this.commit('foodCalorieTable/sortProducts')
  },
  updateFavoriteProduct (state, updatedProduct) {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === updatedProduct.productId) {
        const item = JSON.parse(JSON.stringify(state.products[i]))
        item.favorite = updatedProduct.favorite
        state.products.splice(i, 1, item)
        break
      }
    }
    this.commit('foodCalorieTable/sortProducts')
  },
  updatePinnedProduct (state, updatedProduct) {
    for (let i = 0; i < state.products.length; i++) {
      if (state.products[i].id === updatedProduct.productId) {
        const item = JSON.parse(JSON.stringify(state.products[i]))
        item.pinned = updatedProduct.pinned
        state.products.splice(i, 1, item)
        break
      }
    }
    this.commit('foodCalorieTable/sortProducts')
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
      state.sortedProducts = [...state.products.filter(product => product.user !== null)]
    } else if (state.selectedFilters.productType === 'Закрепленные') {
      // console.log('Закрепленные')
      state.sortedProducts = [...state.products.filter(product => product.pinned !== false)]
    } else if (state.selectedFilters.productType === 'Избранные') {
      // console.log('Избранные')
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

    // Фильтрация по категориям
    let sortedByCategory = []
    for (let i = 0; i < state.sortedProducts.length; i++) {
      // проверка на совпадение выбранных категорий у продукта в массиве state.sortedProducts
      state.selectedFilters.productCategory.forEach(item => {
        if (item.title === state.sortedProducts[i].category.title) {
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

    // Перенос закрепенных в верх списка
    const pinnedProducts = []
    const notPinnedProducts = []
    for (let i = 0; i < state.sortedProducts.length; i++) {
      if (state.sortedProducts[i].pinned) {
        pinnedProducts.push(state.sortedProducts[i])
      } else {
        notPinnedProducts.push(state.sortedProducts[i])
      }
    }
    state.pinnedProducts = pinnedProducts
    state.notPinnedProducts = notPinnedProducts

  },
  changeProductWeight (state, {item, newWeight}) {
    for (let i = 0; i < state.sortedProducts.length; i++) {
      if (state.sortedProducts[i].id === item.id) {
        state.sortedProducts[i].weight = newWeight
        break
      }
    }
  },
  clearProductForm (state) {
    state.productForm = {
      fields: {
        title: null,
        weight: 100,
        protein: null,
        fats: null,
        carb: null,
        kkal: null,
        category: 'Мясо',
        favorite: false,
        pinned: false
      },
      errors: {
        title: { enabled: false, errorMessage: null },
        weight: { enabled: false, errorMessage: null },
        protein: { enabled: false, errorMessage: null },
        fats: { enabled: false, errorMessage: null },
        carb: { enabled: false, errorMessage: null },
        kkal: { enabled: false, errorMessage: null },
        category: { enabled: false, errorMessage: null },
        favorite: { enabled: false, errorMessage: null },
        pinned: { enabled: false, errorMessage: null }
      }
    }
  },
  setProductFormFieldValue (state, ctx) {
    state.productForm.fields[ctx.field] = ctx.newValue
  },
  setProductFormFieldError (state, ctx) {
    state.productForm.errors[ctx.field] = { enabled: ctx.enabled, errorMessage: ctx.errorMessage }
  },
  setModalCondition (state, condition) {
    state.modalCondition = condition
  },
  toggleModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  }
}

export const actions = {
  async getProductCategories ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/food-calorie-table/product-categories`)
      // console.log(response);

      commit('setProductCategories', response.data)
    } catch (error) {
      console.log(error.response)
    }
  },
  async getAllProducts ({ commit }) {
    try {
      this.commit('loaderPreview/updateLoader', {isActive: true, message: 'Загрузка'})

      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/food-calorie-table`)

      commit('setProducts', response.data)

      this.commit('loaderPreview/updateLoader', {isActive: false, message: ''})
    } catch (error) {
      console.log(error.response)

      this.commit('loaderPreview/updateLoader', {isActive: false, message: ''})
    }
  },
  async saveProduct ({ state, commit }) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/food-calorie-table/save-product`, {product: state.productForm.fields})

      commit('addNewProduct', response.data.product)
      commit('toggleModalVisibility', {modal: 'productModalActive', condition: false})

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Продукт успешно сохранен.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при сохранении.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async updateProduct ({ state, commit }) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/food-calorie-table/update-product`, {product: state.productForm.fields})

      if (response.data.product) {
        commit('updateProduct', response.data.product)
        commit('toggleModalVisibility', {modal: 'productModalActive', condition: false})

        const notice = {
          id: Date.now(),
          type: 'success',
          message: 'Продукт успешно обновлен.',
          timeToShow: 5000,
          active: true
        }
        this.commit('notifications/addNewNotice', notice)
      } else {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: 'Неизвестная ошибка. Попробуйте еще раз или обратитесь в службу поддержки.',
          timeToShow: 5000,
          active: true
        }
        this.commit('notifications/addNewNotice', notice)
      }
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при обновлении.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async removeProduct ({ commit }, product) {
    try {
      const response = await this.$axios.$delete(`${process.env.BASE_URL}/api/food-calorie-table/remove-product/${product.id}`)

      if (response.data.removed) {
        await commit('deleteProduct', response.data.productId)

        const notice = {
          id: Date.now(),
          type: 'info',
          message: 'Продукт удален из базы данных.',
          timeToShow: 5000,
          active: true
        }
        this.commit('notifications/addNewNotice', notice)
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
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Неизвестная ошибка. Попробуйте еще раз или обратитесь в службу поддержки.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async changeFavoriteParam ({ commit }, productId) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/food-calorie-table/change-favorite-param`, {productId: productId})

      commit('updateFavoriteProduct', response.data)

      const notice = {
        id: Date.now(),
        type: 'info',
        message: response.data.favorite ? 'Продукт добавлен в избранное.' : 'Продукт удален из избранного.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      console.log(error.response)
    }
  },
  async changePinnedParam ({ commit }, productId) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/food-calorie-table/change-pinned-param`, {productId: productId})

      commit('updatePinnedProduct', response.data)

      const notice = {
        id: Date.now(),
        type: 'info',
        message: response.data.pinned ? 'Продукт добавлен в закрепленные.' : 'Продукт удален из закрепленных.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      console.log(error.response)
    }
  }
}
