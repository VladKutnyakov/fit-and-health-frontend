export default {

  async login ({ commit }, formData) {
    try {
      const fetchedToken = await this.$axios.$post(`${process.env.BASE_URL}/api/auth/login/`, formData)

      // сохроняем в state токен полученный из action login
      commit('setToken', fetchedToken)
    } catch (err) {
      // выводим сообщение об ошибке для пользователя
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: err.response.data.message,
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)

      // Вывод полного варианта ошибки
      console.log(err.response)
    }
  },

  async createUser ({ commit }, formData) {
    try {
      const newUserToken = await this.$axios.$post(`${process.env.BASE_URL}/api/auth/register/`, formData)
      // добавляем токен к запросам axios
      this.$axios.setToken(newUserToken, 'Bearer ')
      // сохроняем в state токен полученный из action login
      commit('setToken', newUserToken)
    } catch (err) {
      // выводим сообщение об ошибке для пользователя
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: err.response.data.message,
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)

      // Вывод полного варианта ошибки
      console.log(err.response)
    }
  },

  async fetchAuthUserInfo ({ commit }, formData) {
    try {
      const response = await this.$axios.$post(`${process.env.BASE_URL}/api/auth/auth-user-info`)

    } catch (err) {
      const notice = {
        id: Date.now(),
        type: 'alert',
        message: err.response.data.message,
        timeToShow: 5000,
      }
      this.commit('notifications/addNewNotice', notice)
    }
  },

}
