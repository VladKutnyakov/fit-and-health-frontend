export const state = () => ({
  trainingProgram: {
    id: null,
    title: null,
    trainingProgramDays: [],
    user: {
      id: null
    }
  },
  trainingDay: {
    id: null,
    title: null,
    comment: null,
    trainingProgramDayExercises: []
  },
})

export const getters = {}

export const mutations = {
  setTrainingProgram (state, payload) {
    state.trainingProgram = payload
  },
  setTrainingDay (state, payload) {
    state.trainingDay = payload
  },
}

export const actions = {

  async fetchTrainingProgram ({ commit }, query ) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/training-process/training-program-info?trainingProgramId=${query.trainingProgramId || ''}`)
      // console.log(response)

      commit('setTrainingProgram', response.data)
    } catch (err) {
      console.log(err)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных для дневника тренировок. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async fetchTrainingDay ({ commit }, query ) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/training-process/training-day-info?trainingDayId=${query.trainingDayId || ''}`)
      // console.log(response)

      commit('setTrainingDay', response.data)
    } catch (err) {
      console.log(err)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных для дневника тренировок. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
