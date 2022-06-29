export default {

  async fetchTrainingProgram ({ commit }, payload ) {
    try {
      const response = await this.$axios.get(`${process.env.BASE_URL}/api/training-process/training-program-info`, { params: payload })

      commit('setTrainingProgramFormFieldsValue', response.data)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error.response.data.errorMessage || 'Неизвестная ошибка.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async fetchTrainingDay ({ commit }, payload) {
    try {
      const response = await this.$axios.get(`${process.env.BASE_URL}/api/training-process/training-day-info`, { params: payload })

      commit('setTrainingDayFormFieldsValue', response)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных для дневника тренировок. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async fetchTrainingProgramsList ({ commit } ) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/training-programs`)

      commit('setTrainingProgramsList', response)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
