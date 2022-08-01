export default {

  async fetchPageInfo ({ commit }) {
    try {
      // const response = await this.$axios.$get(`${process.env.BASE_URL}/api/food-calorie-table/product-categories`)
      // console.log(response);

      // commit('setProductCategories', response.data)
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

  async saveProduct ({ state, commit }) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/food-calorie-table/save-product`, {product: state.productForm.fields})

      commit('addNewProduct', response.data.product)
      commit('toggleModalVisibility', {modal: 'productModalActive', condition: false})

      const notice = {
        id: Date.now(),
        type: 'success',
        message: 'Продукт успешно сохранен.',
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

  async updateProduct ({ state, commit }) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/food-calorie-table/update-product`, {product: state.productForm.fields})

      if (response.data.product) {
        commit('updateProduct', response.data.product)
        commit('toggleModalVisibility', {modal: 'productModalActive', condition: false})

        const notice = {
          id: Date.now(),
          type: 'success',
          message: 'Продукт успешно обновлен.',
          timeToShow: 5000,
        }
        this.commit('notifications/addNewNotice', notice)
      } else {
        const notice = {
          id: Date.now(),
          type: 'alert',
          message: 'Неизвестная ошибка. Попробуйте еще раз или обратитесь в службу поддержки.',
          timeToShow: 5000,
        }
        this.commit('notifications/addNewNotice', notice)
      }
    } catch (error) {
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Ошибка при обновлении.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async removeProduct ({ commit }, product) {
    try {
      const response = await this.$axios.$delete(`${process.env.BASE_URL}/api/food-calorie-table/remove-product/${product.id}`)

      if (response.data.removed) {
        await commit('deleteProduct', response.data.productId)

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
      console.log(error.response)

      const notice = {
        id: Date.now(),
        type: 'alert',
        message: 'Неизвестная ошибка. Попробуйте еще раз или обратитесь в службу поддержки.',
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

  async changePinnedParam ({ commit }, productId) {
    try {
      const response = await this.$axios.$put(`${process.env.BASE_URL}/api/food-calorie-table/change-pinned-param/${productId}`)

      commit('updatePinnedProduct', response.data)

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

      commit('updateFavoriteProduct', response.data)

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
