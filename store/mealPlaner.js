const BASE_URL = process.env.BASE_URL

export const state = () => ({
  mealPlanerInfo: {
    id: null,
    userId: undefined,
    date: '',
    targetProtein: 1,
    targetFats: 0.5,
    targetCarb: 2,
    targetWeight: null,
    title: '',
    description: '',
    marks: [],
    socials: {
      like: null,
      dislike: null,
      repost: null
    },
    mealParts: [
      {
        title: '',
        mealTime: '',
        products: [],
        recipes: []
      }
    ]
  },
  searchRecipesAndProductsModalActive: false,
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
  }
}

export const mutations = {
  setMealPlanerInfo (state, mealPlanerInfo) {
    state.mealPlanerInfo = mealPlanerInfo
  },
  setSearchRecipesAndProductsModalActive (state) {
    state.searchRecipesAndProductsModalActive = !state.searchRecipesAndProductsModalActive
  }
}

export const actions = {
  async fetchMealPlanerInfo ({ commit }, query ) {
    const url = `${BASE_URL}/api/meal-planer?date=${query.date ? query.date : ''}`

    try {
      const response = await this.$axios.$get(url)

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
  }
}
