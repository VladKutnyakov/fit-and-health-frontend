import { generateForm, setForm, setFormFieldValue, setFormFieldError, clearForm } from '../utils/formManager'

export const state = () => ({
  pageInfo: {
    exercises: null,
    userExercises: null,
    pinnedExercises: null,
    favoriteExercises: null,
  },

  searchFilters: {
    searchString: null,
    mediaType: {
      id: 'ALL',
      title: 'Все'
    }, // ALL, FOTO
    trainingPlace: {
      id: 'ALL',
      title: 'Все'
    }, // ALL, HOME, GYM
    userType: {
      id: 'ALL',
      title: 'Все'
    }, // ALL, MY

    orderBy: {
      id: 'title',
      title: 'Названию'
    }, // title, muscleGroup, cardio, power, endurance, flexibility, skill
    muscleGroup: [],
    muscleGroupList: [],
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
    trainingPlace: null,
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
  trainingPlacesList: [],
  modalCondition: 'create',
  exerciseFormModalActive: false,

  waiteExerciseListUpdate: false,
  waiteExerciseInfoLoading: false,
})

export const getters = {}

export const mutations = {
  setPageInfo (state, payload) {
    state.pageInfo = payload
  },
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
  setTrainingPlaces (state, payload) {
    state.trainingPlacesList = payload
  },

  setExerciseForm (state, payload) {
    setForm(state.exerciseForm, payload)
  },
  clearExerciseForm (state) {
    clearForm(state.exerciseForm)
  },
  setExerciseFormFieldValue (state, ctx) {
    setFormFieldValue(state.exerciseForm, ctx)
    setFormFieldError(state.exerciseForm, {field: ctx.field, errorMessage: null})
  },
  setExerciseFormFieldError (state, ctx) {
    setFormFieldError(state.exerciseForm, ctx)
  },

  setModalCondition (state, condition) {
    state.modalCondition = condition
  },
  setModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },
  setWaiteExerciseListUpdate (state, condition) {
    state.waiteExerciseListUpdate = condition
  },
  setWaiteExerciseInfoLoading (state, condition) {
    state.waiteExerciseInfoLoading = condition
  },
}

export const actions = {
  async fetchPageInfo ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercises-page-info`)

      commit('setPageInfo', response)
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

  async fetchExercisesList ({ commit }, payload) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercises-list`, { params: payload })

      commit('cleanExercisesList')
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

  async fetchExerciseInfo ({ commit }, payload) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercise-info/${payload}`)

      commit('setExerciseForm', response)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async saveNewExercise ({ commit }, newExercise) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/exercises/save-new-exercise`, { exercise: newExercise })

      commit('setModalVisibility', { modal: 'exerciseFormModalActive', condition: false })

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Упражнение успешно сохранено.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      // console.log(error.response.data)
      let errorMessage = ''

      for (let i = 0; i < error.response.data.errors.length; i++) {
        if (error.response.data.errors[i].field) {
          // console.log(error.response.data.errors[i])
          commit('setExerciseFormFieldError', error.response.data.errors[i])
        }

        errorMessage += error.response.data.errors[i].errorMessage + ' '
      }

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: errorMessage.length > 0 ? errorMessage : 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async updateExercise ({ commit }, exercise) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/exercises/update-exercise`, { exercise: exercise })

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
  async removeExercise ({ commit }, exerciseId) {
    try {
      const response = await this.$axios.$delete(`${process.env.BASE_URL}/api/exercises/remove-exercise/${exerciseId}`)

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Упражнение успешно удалено, но все еще доступно для пользователей в тренировочных программах.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при удалении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async changePinnedParam ({ commit }, exerciseId) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/exercises/change-pinned-param/${exerciseId}`)

      const notice = {
        id: Date.now(),
        type: 'info',
        message: response.pinned ? 'Упражнение добавлено в закрепленные.' : 'Упражнение удалено из закрепленных.',
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

      const notice = {
        id: Date.now(),
        type: 'info',
        message: response.favorite ? 'Упражнение добавлено в избранное.' : 'Упражнение удалено из избранного.',
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
    // При вызове метода в asyncData использеутся then для установки данных в фильтрах (корневой файл страницы). Для фильтров значения устанавливаются при открытие старницы. Последующие вызовы метода не изменяют состояния фильтров и массива с мышечными группами
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/muscles`)

      commit('setExerciseMusclesList', response)

      return response
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)

      throw error.response.data.details
    }
  },
  async fethExerciseTypes ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercise-types`)

      commit('setExerciseTypesList', response)
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

      commit('setExerciseSortsList', response)
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

      commit('setExerciseExertionsList', response)
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

      commit('setExerciseEquipmentsList', response)
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

      commit('setSkillsList', response)
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
  async fethTrainingPlaces ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/directory/training-places`)

      commit('setTrainingPlaces', response)
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
