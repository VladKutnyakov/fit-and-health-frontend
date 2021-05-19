const BASE_URL = process.env.BASE_URL

export const state = () => ({
  mealPlanerInfo: {
    id: 12,
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
        products: [
          {
            id: 0,
            title: 'Гречка',
            weight: 142,
            protein: 20,
            fats: 10,
            carb: 123,
            kkal: 314,
            category: '',
            userId: null
          },
          {
            id: 1,
            title: 'Курица',
            weight: 260,
            protein: 16,
            fats: 5,
            carb: 26,
            kkal: 245,
            category: '',
            userId: null
          },
        ]
      },
      {
        title: 'Обед',
        mealTime: '13:00',
        recipes: [],
        products: [
          {
            id: 0,
            title: 'Гречка',
            weight: 142,
            protein: 20,
            fats: 10,
            carb: 123,
            kkal: 314,
            category: '',
            userId: null
          },
        ]
      },
    ]
  },
  selectedMealPart: 0,
  searchRecipesAndProductsModalActive: false,

  products: [
    {
      id: 10,
      title: "Гречка",
      protein: 1,
      fats: 4,
      carb: 7,
      kkal: 2,
      category: "Мясо",
      userId: 1,
      weight: 100,
      favorite: true,
      pinned: false,
      added: false,
    }
  ]
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
        for (let i = 0; i < state.products.length; i++) {
          if (mealPartProducts[i].id === state.products[i].id) {
            state.products[i].added = true
          }
        }
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

      // console.log(response)

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      if (response.data.mealPlanerInfo !== false) {
        commit('setMealPlanerInfo', response.data.mealPlanerInfo)
      }
    } catch (e) {
      console.log(e)
    }
  },
  async saveMealPlanerInfo ({ state }) {
    try {
      // console.log(`${BASE_URL}/api/meal-planer/save-meal-planer-info`)
      const response = await this.$axios.$post(`${BASE_URL}/api/meal-planer/save-meal-planer-info`, { mealPlanerInfo: state.mealPlanerInfo })

      if (response.updatedToken) {
        this.commit('auth/setToken', response.updatedToken)
      }

      if (response.data.mealPlanerInfo !== false) {
        commit('setMealPlanerInfo', response.data.mealPlanerInfo)
      }
    } catch (e) {
      console.log(e)
    }
  }
}
