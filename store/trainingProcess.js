import { generateForm, setForm, setFormFieldValue, clearForm } from '@/utils/formManager'

export const state = () => ({
  trainingProgramForm: generateForm({
    isStarted: false,
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
      //   title: "Отжимания",
      //   isStarted: true,
      //   approaches: [
      //     {
      //       isActive: true,
      //       isStarted: true,
      //       title: 'Подход 1',
      //       repeats: {
      //         target: null,
      //         value: null,
      //       },
      //       additionalWeight: {
      //         target: null,
      //         value: null,
      //       },
      //       implementationTime: {
      //         target: null,
      //         value: null,
      //       },
      //       restTime: {
      //         target: null,
      //         value: null,
      //       },
      //     },
      //   ]
      // },
    ]
  }),
  trainingProgramsList: [],
  selectTrainingProgramModalActive: false,
  confirmCompleteTrainingProgramModalActive: false,
})

export const getters = {}

export const mutations = {
  setTrainingProgramFormFieldsValue (state, payload) {
    setForm(state.trainingProgramForm, payload)
  },
  setTrainingProgramFormFieldValue (state, ctx) {
    setFormFieldValue(state.trainingProgramForm, ctx)
  },
  clearTrainingProgramForm (state) {
    clearForm(state.trainingProgramForm)
  },

  setTrainingDayFormFieldsValue (state, payload) {
    setForm(state.trainingDayForm, payload)
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

        if (state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches.length > 0) {
          for (let j = 0; j < state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches.length; j++) {
            if (!state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches[j].isActive) {
              state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches[j].isActive = true
              break
            }
          }
        }
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
          isActive: state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches.length <= 0 ? true : false,
          title: `Подход ${state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches.length + 1}`,
          repeats: {
            target: state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches[0]?.repeats.target || null,
            value: null
          },
          additionalWeight: {
            target: state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches[0]?.additionalWeight.target || null,
            value: null
          },
          implementationTime: {
            target: state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches[0]?.implementationTime.target || null,
            value: null
          },
          restTime: {
            target: state.trainingDayForm.fields.trainingProgramDayExercises[i].approaches[0]?.restTime.target || null,
            value: null
          },
        })
      }
    }
  },
  switchApproachExecution (state, approach) {
    approach.isStarted = !approach.isStarted
  },
  updateApproachImplementationTime (state, { approach, time }) {
    approach.implementationTime = {
      target: null,
      value: time
    }
  },
  completeApproach (state, approach) {
    console.log('completeApproach')
  },
  removeApproach (state, { exercise, approach }) {
    for (let i = 0; i < exercise.approaches.length; i++) {
      if (exercise.approaches[i].title === approach.title) {
        exercise.approaches.splice(i, 1)
      }
    }

    exercise.approaches.forEach((element, index) => {
      element.title = `Подход ${index + 1}`
    })
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
