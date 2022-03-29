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
      //   id: 1,
      //   title: "Отжимания"
      //   isStarted: true,
      //   approaches: [
      //     {
      //       isActive: true,
      //       isStarted: true,
      //       title: 'Подход 1',
      //       repeats: 10,
      //       additionalWeight: 15,
      //       implementationTime: null,
      //       restTime: null,
      //     },
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

  startExercise (state, exerciseId) {
    for (let i = 0; i < state.trainingDayForm.fields.trainingProgramDayExercises.length; i++) {
      if (state.trainingDayForm.fields.trainingProgramDayExercises[i].id === exerciseId) {
        state.trainingDayForm.fields.trainingProgramDayExercises.splice(i, 1, { ...state.trainingDayForm.fields.trainingProgramDayExercises[i], isStarted: true })

        state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches[0].isActive = true
      }
    }
  },
  stopExercise (state, exerciseId) {
    state.trainingDayForm.fields.trainingProgramDayExercises.forEach((element, index) => {
      if (element.id === exerciseId) {
        const updatedExercise = {
          ...element,
          isStarted: false,
        }
        state.trainingDayForm.fields.trainingProgramDayExercises.splice(index, 1, updatedExercise)
      }
    })
  },
  addAproach (state, exerciseId) {
    for (let i = 0; i < state.trainingDayForm.fields.trainingProgramDayExercises.length; i++) {
      if (state.trainingDayForm.fields.trainingProgramDayExercises[i].id === exerciseId) {
        state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches.push({
          isActive: false,
          title: `Подход ${state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches.length + 1}`,
          repeats: null,
          additionalWeight: null,
          implementationTime: null,
          restTime: null,
        })
      }
    }
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
