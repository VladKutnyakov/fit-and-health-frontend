import { generateForm, setFormFieldsValue, setFormFieldValue, clearForm } from '@/utils/formManager'

export const state = () => ({
  trainingProgram: generateForm({
    program: null,
    day: null,
    trainingProgramDays: [],
  }),
  trainingDay: generateForm({
    id: null,
    title: null,
    trainingType: null,
    comment: null,
    trainingProgramDayExercises: [
      {
        exercise: {
          id: 1,
          title: "Отжимания"
        },
        repeats: 12,
        additionalWeight: 12.2,
        implementationTime: null,
        restTime: null,
        approaches: [
          {
            active: true,
            title: 'Подход 1',
            repeats: 10,
            additionalWeight: 15,
            implementationTime: null,
            restTime: null,
          },
          {
            active: false,
            title: 'Подход 2',
            repeats: 8,
            additionalWeight: 15,
            implementationTime: null,
            restTime: null,
          }
        ]
      },
      {
        exercise: {
          id: 1,
          title: "Подтягивания"
        },
        repeats: 12,
        additionalWeight: 12.2,
        implementationTime: null,
        restTime: null,
        approaches: [
          {
            active: false,
            title: 'Подход 1',
            repeats: 10,
            additionalWeight: 15,
            implementationTime: null,
            restTime: null,
          },
          {
            active: false,
            title: 'Подход 2',
            repeats: 8,
            additionalWeight: 15,
            implementationTime: null,
            restTime: null,
          },
          {
            active: false,
            title: 'Подход 3',
            repeats: 10,
            additionalWeight: 15,
            implementationTime: null,
            restTime: null,
          },
          {
            active: false,
            title: 'Подход 4',
            repeats: 8,
            additionalWeight: 15,
            implementationTime: null,
            restTime: null,
          }
        ]
      },
    ]
  }),
  trainingProgramsList: [],
  selectTrainingProgramModalActive: false,
})

export const getters = {}

export const mutations = {
  setTrainingProgramFormFieldsValue (state, payload) {
    setFormFieldsValue(state.trainingProgram, payload)
  },
  setTrainingProgramFormFieldValue (state, ctx) {
    setFormFieldValue(state.trainingProgram, ctx)
  },
  clearTrainingProgramForm (state) {
    clearForm(state.trainingProgram)
  },

  setTrainingDayFormFieldsValue (state, payload) {
    setFormFieldsValue(state.trainingDay, payload)
  },
  setTrainingDayFormFieldValue (state, ctx) {
    setFormFieldValue(state.trainingDay, ctx)
  },
  clearTrainingDayForm (state) {
    clearForm(state.trainingDay)
  },

  setTrainingProgramsList (state, payload) {
    state.trainingProgramsList = payload
  },

  toggleModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
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

  async fetchTrainingDay ({ commit }, payload ) {
    try {
      const response = await this.$axios.get(`${process.env.BASE_URL}/api/training-process/training-day-info`, { params: payload })
      // console.log(response)

      commit('setTrainingDayFormFieldsValue', response.data)
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
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
