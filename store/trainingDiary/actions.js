export default {

  async fetchTrainingDiaryInfo ({ commit }, query ) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/training-diary?date=${query.date ? query.date : ''}`)

      commit('setTrainingDiaryInfo', response.data)
    } catch (err) {
      console.log(err)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных для дневника тренировок. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
