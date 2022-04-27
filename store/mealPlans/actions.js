export default {

  async fetchMealPlans ({ commit }, query ) {
    try {
      // const MealPlans = await this.$axios.$get(`http://localhost:3000/api/meal-planer?date=${query.date}`)

      // console.log(MealPlans)

      // commit('setMealPlans', MealPlans)
    } catch (e) {
      console.log(e)
    }
  },

}
