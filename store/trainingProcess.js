import { generateForm, setFormFieldsValue, setFormFieldValue, clearForm } from '@/utils/formManager'

export const state = () => ({
  trainingProgramForm: generateForm({
    trainingProgram: null,
    previewImage: null,
    trainingProgramAccent: null,
    trainingDay: null,
    trainingProgramDaysList: []
  }),
  trainingDayForm: generateForm({
    trainingDay: {
      id: null,
      title: null,
    },
    trainingType: null,
    comment: null,
    trainingProgramDayExercises: [
      // {
      //   isStarted: true,
      //   exercise: {
      //     id: 1,
      //     title: "Отжимания"
      //   },
      //   approaches: [
      //     {
      //       isActive: true,
      //       title: 'Подход 1',
      //       repeats: 10,
      //       additionalWeight: 15,
      //       implementationTime: null,
      //       restTime: null,
      //     },
      //     {
      //       isActive: false,
      //       title: 'Подход 2',
      //       repeats: 8,
      //       additionalWeight: 15,
      //       implementationTime: null,
      //       restTime: null,
      //     }
      //   ]
      // },
      // {
      //   isStarted: false,
      //   exercise: {
      //     id: 1,
      //     title: "Подтягивания"
      //   },
      //   approaches: [
      //     {
      //       isActive: false,
      //       title: 'Подход 1',
      //       repeats: 10,
      //       additionalWeight: 15,
      //       implementationTime: null,
      //       restTime: null,
      //     },
      //     {
      //       isActive: false,
      //       title: 'Подход 2',
      //       repeats: 8,
      //       additionalWeight: 15,
      //       implementationTime: null,
      //       restTime: null,
      //     },
      //     {
      //       isActive: false,
      //       title: 'Подход 3',
      //       repeats: 10,
      //       additionalWeight: 15,
      //       implementationTime: null,
      //       restTime: null,
      //     },
      //     {
      //       isActive: false,
      //       title: 'Подход 4',
      //       repeats: 8,
      //       additionalWeight: 15,
      //       implementationTime: null,
      //       restTime: null,
      //     }
      //   ]
      // },
    ]
  }),
  trainingProgramsList: [],
  selectTrainingProgramModalActive: false,
})

export const getters = {}

export const mutations = {
  setTrainingProgramFormFieldsValue (state, payload) {
    setFormFieldsValue(state.trainingProgramForm, payload)
  },
  setTrainingProgramFormFieldValue (state, ctx) {
    setFormFieldValue(state.trainingProgramForm, ctx)
  },
  clearTrainingProgramForm (state) {
    clearForm(state.trainingProgramForm)
  },

  setTrainingDayFormFieldsValue (state, payload) {
    setFormFieldsValue(state.trainingDayForm, payload)
  },
  setTrainingDayFormFieldValue (state, ctx) {
    setFormFieldValue(state.trainingDayForm, ctx)
  },
  clearTrainingDayForm (state) {
    clearForm(state.trainingDayForm)
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

  async fetchTrainingProgramsList ({ commit } ) {
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
