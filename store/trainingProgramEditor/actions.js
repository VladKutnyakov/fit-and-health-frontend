export default {

  async fetchTrainingProgram ({ commit }, trainingProgramId ) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/training-programs/${trainingProgramId}`)

      commit('setTrainingProgram', response.data)
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
  async saveTrainingProgram ({ commit }, payload ) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/training-programs/save-training-program`, { trainingProgram: payload })

      console.log(response.data)

      // commit('setTrainingDiaryInfo', response.data)
    } catch (error) {
      console.log(error.response.data.errorMessage)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error.response.data.errorMessage,
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async fetchExercisesList ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercises-list`)

      commit('setExercisesList', response.data)
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
  async fetchSkills ({ commit }) {
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
  async fetchTrainingTypes ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/directory/training-types`)

      commit('setTrainingTypesList', response.data)
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
