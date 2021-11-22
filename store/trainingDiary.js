export const state = () => ({
  trainingDiaryInfo: {
    id: null,
    date: null,
    trainingProgram: {
      id: null,
      title: null,
      description: null,
      trainingSkill: null,
      marks: [],
      trainingProgramDays: [],
      trainingProcesses: []
    },
    user: {
      id: null
    }
  }
})

export const getters = {}

export const mutations = {
  setTrainingDiaryInfo (state, payload) {
    state.trainingDiaryInfo = payload
  }
}

export const actions = {
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
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  }
}
