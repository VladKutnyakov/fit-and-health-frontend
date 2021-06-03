const BASE_URL = process.env.BASE_URL

export const state = () => ({
  mealPlanerInfo: {
    id: null,
    userId: undefined,
    date: '',
    targetProtein: 1,
    targetFats: 0.5,
    targetCarb: 2,
    targetWeight: 70,
    title: '',
    description: '',
    marks: [],
    social: {
      like: null,
      dislike: null,
      repost: null
    },
    mealParts: [
      {
        title: 'Затрак',
        mealTime: '07:00',
        recipes: [],
        products: []
      },
    ]
  },
  userWeight: [74.8, 74.05, 73.6, 73.4, 73.4],

  selectedMealPart: 0,
  searchRecipesAndProductsModalActive: false,

  products: []
})

export const getters = {
  getDayTargetKkal (state) {
    // targetKkalMale = (88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * activity
    // targetKkalFemale = (447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * activity

    // if (state.userGender === 'male') {
    //   let targetKkal = (88.36 + (13.4 * state.targetWeight) + (4.8 * state.userHeight) - (5.7 * state.userAge)) * state.userActivity
    //   return Math.round(targetKkal)
    // } else {
    //   lettargetKkal = (447.6 + (9.2 * state.targetWeight) + (3.1 * state.userHeight) - (4.3 * state.userAge)) * state.userActivity
    //   return Math.round(targetKkal)
    // }

    let currentKkal = (state.mealPlanerInfo.targetProtein * state.mealPlanerInfo.targetWeight * 4.1) + (state.mealPlanerInfo.targetFats * state.mealPlanerInfo.targetWeight * 9.3) + (state.mealPlanerInfo.targetCarb * state.mealPlanerInfo.targetWeight * 4.1)

    return Math.round(currentKkal)
  },
  getMealPartProducts (state) {
    return state.mealPlanerInfo.mealParts[state.selectedMealPart].products
  },
  getCurrentProtein (state) {
    const products = []
    for (let i = 0; i < state.mealPlanerInfo.mealParts.length; i++) {
      state.mealPlanerInfo.mealParts[i].products.forEach(element => {
        products.push(element)
      })
    }

    let currentProteinSumm = 0
    products.forEach(element => {
      currentProteinSumm += parseFloat(element.protein * element.weight / 100)
    })

    return Math.round(currentProteinSumm * 100) / 100
  },
  getCurrentFats (state) {
    const products = []
    for (let i = 0; i < state.mealPlanerInfo.mealParts.length; i++) {
      state.mealPlanerInfo.mealParts[i].products.forEach(element => {
        products.push(element)
      })
    }

    let currentFatsSumm = 0
    products.forEach(element => {
      currentFatsSumm += parseFloat(element.fats * element.weight / 100)
    })

    return Math.round(currentFatsSumm * 100) / 100
  },
  getCurrentCarb (state) {
    const products = []
    for (let i = 0; i < state.mealPlanerInfo.mealParts.length; i++) {
      state.mealPlanerInfo.mealParts[i].products.forEach(element => {
        products.push(element)
      })
    }

    let currentCarbSumm = 0
    products.forEach(element => {
      currentCarbSumm += parseFloat(element.carb * element.weight / 100)
    })

    return Math.round(currentCarbSumm * 100) / 100
  },
  getCurrentKkal (state) {
    const products = []
    for (let i = 0; i < state.mealPlanerInfo.mealParts.length; i++) {
      state.mealPlanerInfo.mealParts[i].products.forEach(element => {
        products.push(element)
      })
    }

    let currentKkalSumm = 0
    products.forEach(element => {
      currentKkalSumm += parseFloat(element.kkal * element.weight / 100)
    })

    return Math.round(currentKkalSumm * 100) / 100
  },
}

export const mutations = {
  setMealPlanerInfo (state, mealPlanerInfo) {
    state.mealPlanerInfo = mealPlanerInfo

    state.mealPlanerInfo.marks = JSON.parse(mealPlanerInfo.marks)
    state.mealPlanerInfo.social = JSON.parse(mealPlanerInfo.social)
    state.mealPlanerInfo.mealParts = JSON.parse(mealPlanerInfo.mealParts)
  },
  setProducts (state, products) {
    state.products = products

    // Добавить свойство "добавлен для всех продуктов"
    state.products.forEach(element => {
      element.added = false
    })
  },
  setTargetNutrient (state, updatedNutrient) {
    state.mealPlanerInfo[updatedNutrient.field] = updatedNutrient.value
  },
  setTargetWeight (state, value) {
    state.mealPlanerInfo.targetWeight = value
  },
  setSearchRecipesAndProductsModalActive (state) {
    state.searchRecipesAndProductsModalActive = !state.searchRecipesAndProductsModalActive

    // Снять статус "добавлен" со всех продуктов, чтобы в дальнейшем установить его для продуктов добавленных в выбранный прием пищи рациона
    state.products.forEach(element => {
      element.added = false
    })

    // Установка статуса "добавлен" для продуктов, которые есть в выбранном приеме пищи
    if (state.searchRecipesAndProductsModalActive) {
      const mealPartProducts = state.mealPlanerInfo.mealParts[state.selectedMealPart].products
      // Перебор всех добавленных продуктов
      for (let i = 0; i < mealPartProducts.length; i++) {
        // Перебор списка всех продуктов
        state.products.forEach(element => {
          if (element.id === mealPartProducts[i].id) {
            element.added = true
          }
        })
      }
    }
  },
  setMealPlanMark (state, mark) {
    state.mealPlanerInfo.marks.push(mark)
  },
  removeMealPlanMark (state, markIndex) {
    state.mealPlanerInfo.marks.splice(markIndex, 1)
  },
  setMealPlanTitle (state, newValue) {
    state.mealPlanerInfo.title = newValue
  },
  setMealPlanDescription (state, newValue) {
    state.mealPlanerInfo.description = newValue
  },
  setSelectedMealPart (state, index) {
    state.selectedMealPart = index

    // Скрываем модальное окно со списком продуктов и рецептов для добавления в прием пищи
    state.searchRecipesAndProductsModalActive = false
  },
  addNewMealPart (state) {
    const emptyMealPart = {
      title: 'Новый прием пищи',
      mealTime: '00:00',
      recipes: [],
      products: []
    }
    state.mealPlanerInfo.mealParts.push(emptyMealPart)
    state.selectedMealPart = state.mealPlanerInfo.mealParts.length - 1
  },
  removeSelectedMealPart (state) {
    if (state.mealPlanerInfo.mealParts.length > 1) {
      state.mealPlanerInfo.mealParts.splice(state.selectedMealPart, 1)
      if (state.selectedMealPart !== 0) {
        state.selectedMealPart -= 1
      }
    }
  },
  setMealPartTime (state, newValue) {
    state.mealPlanerInfo.mealParts[state.selectedMealPart].mealTime = newValue
  },
  setMealPartTitle (state, newValue) {
    state.mealPlanerInfo.mealParts[state.selectedMealPart].title = newValue
  },
  setProductWeight (state, ctx) {
    const products = state.mealPlanerInfo.mealParts[state.selectedMealPart].products
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === ctx.id) {
        products[i].weight = ctx.newValue
      }
    }
  },
  addFoodToMealPart (state, food) {
    state.products.forEach(element => {
      if (element.id === food.id) {
        element.added = true
      }
    })
    state.mealPlanerInfo.mealParts[state.selectedMealPart].products.push(food)
  },
  removeFoodFromMealPart (state, productId) {
    // Удалить продукт из списка продуктов для выбранного приема пищи
    const products = state.mealPlanerInfo.mealParts[state.selectedMealPart].products
    for (let i = 0; i < products.length; i++) {
      if (products[i].id === productId) {
        products.splice(i, 1)
      }
    }

    // Убрать статус добавлен в окне поиска и добавления продуктов
    state.products.forEach(element => {
      if (element.id === productId) {
        element.added = false
      }
    })
  }
}

export const actions = {
  async fetchMealPlanerInfo ({ commit }, query ) {
    try {
      const response = await this.$axios.$get(`${BASE_URL}/api/meal-planer?date=${query.date ? query.date : ''}`)

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      if (response.data.mealPlanerInfo !== false) {
        commit('setMealPlanerInfo', response.data.mealPlanerInfo)
      }
    } catch (error) {
      console.log(error)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных для дневника питания. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async saveMealPlanerInfo ({ state, commit }) {
    try {
      const response = await this.$axios.$post(`${BASE_URL}/api/meal-planer/save-meal-planer-info`, { mealPlanerInfo: state.mealPlanerInfo })

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      console.log(response.data.mealPlanerInfo)
      commit('setMealPlanerInfo', response.data.mealPlanerInfo)

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Данные успешно сохранены.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)

    } catch (error) {
      console.log(error)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при сохранении. Попробуйте еще раз или обратитесь в службу поддержки.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async removeMealPlanerInfo ({ state, commit }) {
    try {
      const response = await this.$axios.$post(`${BASE_URL}/api/meal-planer/remove-meal-planer-info`, { mealPlanerInfoID: state.mealPlanerInfo.id })

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      if (response.data.removed) {
        const emptyMealPlanerInfo = {
          id: null,
          userId: undefined,
          date: '',
          targetProtein: 1,
          targetFats: 0.5,
          targetCarb: 2,
          targetWeight: 70,
          title: '',
          description: '',
          marks: [],
          social: {
            like: null,
            dislike: null,
            repost: null
          },
          mealParts: [
            {
              title: 'Затрак',
              mealTime: '07:00',
              recipes: [],
              products: []
            },
          ]
        }

        commit('setMealPlanerInfo', emptyMealPlanerInfo)

        const notice = {
          id: Date.now(),
          type: 'success',
          message: 'Данные успешно удалены.',
          timeToShow: 5000,
          active: true
        }
        this.commit('notifications/addNewNotice', notice)
      }
    } catch (error) {
      console.log(error)

      if (error.response.status === 400) {
        const notice = {
          id: Date.now(),
          type: 'warning',
          message: error.response.data.message,
          timeToShow: 5000,
          active: true
        }
        this.commit('notifications/addNewNotice', notice)
      } else {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: 'Ошибка при удалении. Попробуйте еще раз или обратитесь в службу поддержки.',
          timeToShow: 5000,
          active: true
        }
        this.commit('notifications/addNewNotice', notice)
      }
    }
  },

  async fetchProducts ({ state, commit }) {
    try {
      const response = await this.$axios.$get(`${BASE_URL}/api/food-calorie-table`)

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      commit('setProducts', response.data)
    } catch (error) {
      console.log(error)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных для списка продуктов. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  }
}
