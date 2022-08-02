export default {

  async fetchPageInfo ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/food-calorie-table/page-info`)

      commit('setPageInfo', response)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при получении данных.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async fetchProductCategories ({ commit }) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/food-calorie-table/product-categories`)
      // console.log(response);

      commit('setProductCategories', response)

      return response
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при получении данных.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async fetchProductsList ({ commit }, payload) {
    try {
      const response = await this.$axios.$get(`${process.env.BASE_URL}/api/food-calorie-table`, { params: payload })

      commit('cleanProductsList')
      commit('setProductsList', response)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при получении данных.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async saveProduct ({ state, commit }, payload) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/food-calorie-table/save-product`, { product: payload })

      commit('toggleModalVisibility', {
        modal: 'productModalActive',
        condition: false,
      })

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Продукт успешно сохранен.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error?.response?.data?.errors[0]?.errorMessage || 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async updateProduct ({ state, commit }, payload) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/food-calorie-table/update-product`, { product: payload })

      commit('toggleModalVisibility', {
        modal: 'productModalActive',
        condition: false,
      })

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Продукт успешно обновлен.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error?.response?.data?.errors[0]?.errorMessage || 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async removeProduct ({ commit }, payload) {
    try {
      const response = await this.$axios.$delete(`${process.env.BASE_URL}/api/food-calorie-table/remove-product/${payload.id}`)

      if (response.removed) {
        const notice = {
          id: Date.now(),
          type: 'info',
          message: 'Продукт удален из базы данных.',
          timeToShow: 5000,
        }
        this.commit('notifications/addNewNotice', notice)
      } else {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: 'Удалить продукт не удалось.',
          timeToShow: 5000,
        }
        this.commit('notifications/addNewNotice', notice)
      }
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error?.response?.data?.errors[0]?.errorMessage || 'Ошибка при удалении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async changePinnedParam ({ commit }, productId) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/food-calorie-table/change-pinned-param/${productId}`)

      const notice = {
        id: Date.now(),
        type: 'info',
        message: response.data.pinned ? 'Продукт добавлен в закрепленные.' : 'Продукт удален из закрепленных.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error?.response?.data?.errors[0]?.errorMessage || 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async changeFavoriteParam ({ commit }, productId) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/food-calorie-table/change-favorite-param/${productId}`)

      const notice = {
        id: Date.now(),
        type: 'info',
        message: response.data.favorite ? 'Продукт добавлен в избранное.' : 'Продукт удален из избранного.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    } catch (error) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: error?.response?.data?.errors[0]?.errorMessage || 'Ошибка при сохранении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
