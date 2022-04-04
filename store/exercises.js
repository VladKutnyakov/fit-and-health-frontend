import { generateForm } from '../utils/formManager'

export const state = () => ({
  searchFilters: {
    searchString: null,
    mediaType: null,
    trainingType: null,
    userType: null,
  },

  pinnedExercises: [],
  notPinnedExercises: [],
  exerciseForm: generateForm({
    id: null,
    title: null,
    techniqueDescription: null,
    type: null,
    sort: null,
    exertion: null,
    equipment: null,
    skill: null,
    muscleGroup: null,
    additionalMuscles: null,
    power: null,
    endurance: null,
    flexibility: null,
    cardio: null,
    favorite: false,
    pinned: false,
    user: null,
  }),
  exerciseMusclesList: [],
  exerciseTypesList: [],
  exerciseSortsList: [],
  exerciseExertionsList: [],
  exerciseEquipmentsList: [],
  skillsList: [],
  modalCondition: 'create',
  exerciseFormModalActive: false
})

export const getters = {
  getExercisesCount (state) {
    // let ExercisesCount = 0
    // for (let i = 0; i < state.exercisesList.length; i++) {
    //   ExercisesCount += state.exercisesList[i].exercises.length
    // }
    // return ExercisesCount
    return 0
  },
  getUserExercisesCount (state) {
    // let UserExercisesCount = 0
    // for (let i = 0; i < state.exercisesList.length; i++) {
    //   state.exercisesList[i].exercises.forEach(element => {
    //     if (element.user) {
    //       UserExercisesCount += 1
    //     }
    //   })
    // }
    // return UserExercisesCount
    return 0
  },
}

export const mutations = {
  setSearchFiltersParam (state, ctx) {
    state.searchFilters[ctx.param] = ctx.newValue
  },
  setExercisesList (state, payload) {
    payload.forEach(element => {
      if (element.pinned) {
        state.pinnedExercises.push(element)
      } else {
        state.notPinnedExercises.push(element)
      }
    })
  },
  cleanExercisesList (state) {
    state.pinnedExercises = []
    state.notPinnedExercises = []
  },
  addNewExercise (state, createdExercise) {
    for (let i = 0; i < state.exercisesList.length; i++) {
      if (state.exercisesList[i].id === createdExercise.muscleGroup.id) {
        state.exercisesList[i].exercises.push(createdExercise)
      }
    }
  },
  updateExercise (state, payload) {
    console.log(payload)
  },
  setExerciseMusclesList (state, payload) {
    state.exerciseMusclesList = payload
  },
  setExerciseTypesList (state, payload) {
    state.exerciseTypesList = payload
  },
  setExerciseSortsList (state, payload) {
    state.exerciseSortsList = payload
  },
  setExerciseExertionsList (state, payload) {
    state.exerciseExertionsList = payload
  },
  setExerciseEquipmentsList (state, payload) {
    state.exerciseEquipmentsList = payload
  },
  setSkillsList (state, payload) {
    const list = []
    for (let i = 0; i < payload.length; i++) {
      list.push({id: payload[i].id, title: payload[i].excellenceTitle})
    }
    state.skillsList = list
  },
  setExerciseFormFieldValue (state, ctx) {
    state.exerciseForm.fields[ctx.field] = ctx.newValue
  },
  setExerciseFormFieldError (state, ctx) {
    state.exerciseForm.errors[ctx.field] = {
      enabled: ctx.enabled,
      errorMessage: ctx.errorMessage
    }
  },
  clearExerciseForm (state) {
    // Очистить значения полей формы
    for (const key in state.exerciseForm.fields) {
      state.exerciseForm.fields[key] = null
    }
    // Очистить ошибки полей формы
    for (const key in state.exerciseForm.fields) {
      state.exerciseForm.errors[key] = {
        enabled: false,
        errorMessage: null
      }
    }
  },
  setExerciseForm (state, payload) {
    // Установить значения полей формы
    for (const key in state.exerciseForm.fields) {
      state.exerciseForm.fields[key] = payload[key]
    }
    // Очистить ошибки полей формы
    for (const key in state.exerciseForm.fields) {
      state.exerciseForm.errors[key] = {
        enabled: false,
        errorMessage: null
      }
    }
  },
  updatePinnedExercise (state, updatedExercise) {
    state.exercisesList.forEach(element => {
      for (let i = 0; i < element.exercises.length; i++) {
        if (element.exercises[i].id == updatedExercise.exerciseId) {
          // console.log(element.exercises[i].id)
          const item = JSON.parse(JSON.stringify(element.exercises[i]))
          item.pinned = updatedExercise.pinned
          element.exercises.splice(i, 1, item)
          break
        }
      }
    })
  },
  updateFavoriteExercise (state, updatedExercise) {
    state.exercisesList.forEach(element => {
      for (let i = 0; i < element.exercises.length; i++) {
        if (element.exercises[i].id == updatedExercise.exerciseId) {
          // console.log(element.exercises[i].id)
          const item = JSON.parse(JSON.stringify(element.exercises[i]))
          item.favorite = updatedExercise.favorite
          element.exercises.splice(i, 1, item)
          break
        }
      }
    })
  },
  setModalCondition (state, condition) {
    state.modalCondition = condition
  },
  setModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  }
}

export const actions = {
  async fetchExercisesList ({ commit }, payload) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercises-list`, { params: payload })

      commit('setExercisesList', response)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async saveNewExercise ({ commit }, newExercise) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/exercises/save-new-exercise`, { exercise: newExercise })

      commit('addNewExercise', response.data)
      commit('setModalVisibility', { modal: 'exerciseFormModalActive', condition: false })

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Упражнение успешно сохранено.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      console.log(error)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async updateExercise ({ commit }, exercise) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/exercises/update-exercise`, { exercise: exercise })

      commit('updateExercise',  response.data)
      commit('setModalVisibility', { modal: 'exerciseFormModalActive', condition: false })

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Упражнение успешно отредактированно.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      console.log(error)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async changePinnedParam ({ commit }, exerciseId) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/exercises/change-pinned-param/${exerciseId}`)

      commit('updatePinnedExercise', response.data)

      const notice = {
        id: Date.now(),
        type: 'info',
        message: response.data.pinned ? 'Упражнение добавлено в закрепленные.' : 'Упражнение удалено из закрепленных.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async changeFavoriteParam ({ commit }, exerciseId) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/exercises/change-favorite-param/${exerciseId}`)

      commit('updateFavoriteExercise', response.data)

      const notice = {
        id: Date.now(),
        type: 'info',
        message: response.data.favorite ? 'Упражнение добавлено в избранное.' : 'Упражнение удалено из избранного.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async fetchMuscles ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/muscles`)

      commit('setExerciseMusclesList', response.data)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async fethExerciseTypes ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercise-types`)

      commit('setExerciseTypesList', response.data)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async fethExerciseSorts ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercise-sorts`)

      commit('setExerciseSortsList', response.data)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async fethExerciseExertions ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercise-exertions`)

      commit('setExerciseExertionsList', response.data)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async fethExerciseEquipments ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercise-equipments`)

      commit('setExerciseEquipmentsList', response.data)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async fethSkills ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/directory/skill-types`)

      commit('setSkillsList', response.data)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
}
