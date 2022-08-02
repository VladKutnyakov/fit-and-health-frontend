export default {

  async fetchMealPlanerInfo ({ commit }, query ) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/meal-planer?date=${query.date ? query.date : ''}`)

      commit('setMealPlanerInfo', response)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при загрузке данных для дневника питания. Обновите страницу или зайдите позже.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  async saveMealPlanerInfo ({ state, commit }) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/meal-planer/save-meal-planer-info`, { mealPlanerInfo: state.mealPlanerInfo })

      // commit('setMealPlanerInfo', response.data)

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Данные успешно сохранены.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)

    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при сохранении. Попробуйте еще раз или обратитесь в службу поддержки.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },
  // async removeMealPlanerInfo ({ state, commit }) {
  //   try {
  //     const response = await this.$axios.$post(`${process.env.BASE_URL}/api/meal-planer/remove-meal-planer-info`, { mealPlanerInfoID: state.mealPlanerInfo.id })

  //     if (response.updatedToken) {
  //       this.commit('auth/setToken', response.updatedToken)
  //     }

  //     if (response.data.removed) {
  //       const emptyMealPlanerInfo = {
  //         id: null,
  //         userId: undefined,
  //         date: '',
  //         targetProtein: 1,
  //         targetFats: 0.5,
  //         targetCarb: 2,
  //         targetWeight: 70,
  //         title: '',
  //         description: '',
  //         marks: "[]",
  //         social: '{"like":null,"dislike":null,"repost":null}',
  //         mealParts: '[{"title":"Затрак","mealTime":"07:00","recipes":[],"products":[]},{"title":"Обед","mealTime":"13:00","recipes":[],"products":[]}]'
  //       }

  //       commit('setMealPlanerInfo', emptyMealPlanerInfo)

  //       const notice = {
  //         id: Date.now(),
  //         type: 'success',
  //         message: 'Данные успешно удалены.',
  //         timeToShow: 5000,
  //       }
  //       this.commit('notifications/addNewNotice', notice)
  //     }
  //   } catch (error) {
  //     if (error.response && error.response.status === 400) {
  //       const notice = {
  //         id: Date.now(),
  //         type: 'warning',
  //         message: error.response.data.message,
  //         timeToShow: 5000,
  //       }
  //       this.commit('notifications/addNewNotice', notice)
  //     } else {
  //       const notice = {
  //         id: Date.now(),
  //         type: 'alert',
  //         message: 'Ошибка при удалении. Попробуйте еще раз или обратитесь в службу поддержки.',
  //         timeToShow: 5000,
  //       }
  //       this.commit('notifications/addNewNotice', notice)
  //     }
  //   }
  // },

}
