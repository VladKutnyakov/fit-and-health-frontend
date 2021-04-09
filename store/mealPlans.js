export const state = () => ({
  mealPlans: [
    {
      id: 1,
      title: '1'
    }
  ]
})

export const getters = {}

export const mutations = {}

export const actions = {
  async fetchMealPlans ({ commit }, query ) {
    try {
      // const MealPlans = await this.$axios.$get(`http://localhost:3000/api/meal-planer?date=${query.date}`)

      // console.log(MealPlans)

      // commit('setMealPlans', MealPlans)
    } catch (e) {
      console.log(e)
    }
  }
}
