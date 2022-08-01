export default {

  setSearchFiltersParam (state, ctx) {
    state.searchFilters[ctx.param] = ctx.newValue
  },

  setProductCategories (state, payload) {
    state.productCategories = payload
  },

  setProductsList (state, payload) {
    payload.forEach(element => {
      if (element.pinned) {
        state.pinnedProducts.push(element)
      } else {
        state.notPinnedProducts.push(element)
      }
    })
  },
  cleanProductsList (state) {
    state.pinnedProducts = []
    state.notPinnedProducts = []
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
      if (state.products[i].id == updatedProduct.productId) {
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
      if (state.products[i].id == updatedProduct.productId) {
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
    console.log(1);

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
  setProductFormFieldValue (state, ctx) {
    state.productForm.fields[ctx.field] = ctx.newValue
  },
  setProductFormFieldError (state, ctx) {
    state.productForm.errors[ctx.field] = {
      enabled: ctx.enabled,
      errorMessage: ctx.errorMessage
    }
  },
  clearProductForm (state) {
    // Очистить значения полей формы
    for (const key in state.productForm.fields) {
      state.productForm.fields[key] = null
    }
    // Очистить ошибки полей формы
    for (const key in state.productForm.fields) {
      state.productForm.errors[key] = {
        enabled: false,
        errorMessage: null
      }
    }
  },
  setModalCondition (state, condition) {
    state.modalCondition = condition
  },
  toggleModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },

}
