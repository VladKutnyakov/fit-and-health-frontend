export const state = () => ({
  trainingProgramsList: [],
})

export const getters = {}

export const mutations = {
  setTrainingProgramsList (state, payload) {
    state.trainingProgramsList = payload
  },
}

export const actions = {

  async fetchTrainingProgramsList ({ commit }, query ) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/training-programs`)

      commit('setTrainingProgramsList', response.data)
    } catch (err) {
      console.log(err)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
