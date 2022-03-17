import { generateForm, setFormFieldsValue, setFormFieldValue } from '@/utils/formManager'

export const state = () => ({
  trainingProgram: generateForm({
    program: null,
    day: null,
    trainingProgramDays: [],
  }),
  trainingDay: {
    id: null,
    title: null,
    comment: null,
    trainingProgramDayExercises: [
      {
        exercise: {
          title: '1'
        },
        approaches: 4,
        repeats: 1,
        additionalWeight: 1,
      },
      {
        exercise: {
          title: '2'
        }
      },
    ]
  },
})

export const getters = {}

export const mutations = {
  setTrainingProgramFormFieldsValue (state, payload) {
    setFormFieldsValue(state.trainingProgram, payload)
  },
  setTrainingProgramFormFieldValue (state, ctx) {
    setFormFieldValue(state.trainingProgram, ctx)
  },

  setTrainingDay (state, payload) {
    state.trainingDay = payload
  },
}

export const actions = {

  async fetchTrainingProgram ({ commit }, payload ) {
    try {
      const response = await this.$axios.get(`${process.env.BASE_URL}/api/training-process/training-program-info`, { params: payload })
      // console.log(response.data)

      commit('setTrainingProgramFormFieldsValue', response.data)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error.response.data.errorMessage || 'Неизвестная ошибка.',
        timeToShow: 5000,
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
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
