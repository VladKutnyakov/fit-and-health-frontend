import { formGenerator } from '../utils/formGenerator'

export const state = () => ({
  exercisesList: [],
  exerciseInfo: {
    id: null,
    title: null,
    type: null,
    sort: null,
    equipment: null,
    exertion: null,
    practiceLevel: null,
    techniqueDescription: null,
    muscleGroup: null,
    additionalMuscles: [],
    user: null
  },
  exerciseForm: formGenerator({
    title: null
  }),
  modalCondition: 'create',
  exerciseFormModalActive: false
})

export const getters = {
  getExerciseInfo (state) {
    return state.exerciseInfo
  },
  getExercisesCount (state) {
    let ExercisesCount = 0
    for (let i = 0; i < state.exercisesList.length; i++) {
      ExercisesCount += state.exercisesList[i].exercises.length
    }
    return ExercisesCount
  },
  getUserExercisesCount (state) {
    let UserExercisesCount = 0
    for (let i = 0; i < state.exercisesList.length; i++) {
      state.exercisesList[i].exercises.forEach(element => {
        if (element.user) {
          UserExercisesCount += 1
        }
      })
    }
    return UserExercisesCount
  },
}

export const mutations = {
  setExercisesList (state, payload) {
    state.exercisesList = payload
  },
  setExerciseInfo (state, ExerciseInfo) {
    state.exerciseInfo = ExerciseInfo
  },
  addNewExercises (state, savedExercise) {
    state.exercises.push(savedExercise)
  },
  setModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  }
}

export const actions = {
  async fetchExercisesList ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises`)

      commit('setExercisesList', response.data)
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных',
        timeToShow: 5000,
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async fetchExerciseInfo ({ commit }, exercisesId) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercise-info/${exercisesId}`)

      commit('setExerciseInfo', response.data)
    } catch (err) {
      console.log(err)
    }
  },
  async saveNewExercises ({ commit }, newExercise) {
    try {
      // console.log('seve ', newExercises)
      // const savedExercise = await this.$axios.$post(`${process.env.BASE_URL}/api/exercises/save-new-exercise`, newExercise)

      // console.log(savedExercise)
      // commit('addNewExercises', savedExercise)
    } catch (err) {
      console.log(err)
    }
  }
}