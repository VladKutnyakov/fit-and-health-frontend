export default {

  async fetchPageInfo ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/exercises/exercises-page-info`)

      commit('setPageInfo', response)
    } catch (error) {
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

      return response
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при удалении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)

      throw error.response.data.details
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
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error.response.data.errors[0].errorMessage || 'Ошибка при сохранении.',
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
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error.response.data.errors[0].errorMessage || 'Ошибка при сохранении.',
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
