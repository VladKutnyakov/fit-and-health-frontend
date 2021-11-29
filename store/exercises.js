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
      enabled: false,
      errorMessage: null
    }
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
        active: true
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
        active: true
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
        active: true
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
        active: true
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
        active: true
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
        active: true
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
}
