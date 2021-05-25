import Cookies from 'js-cookie'

export const state = () => ({
  token: null,
})

export const getters = {
  isAuthenticated (state) {
    return state.token ? true : false
  }
}

export const mutations = {
  setToken (state, token) {
    state.token = token

    // добавляем токен к запросам axios
    this.$axios.setToken(fetchedToken, 'Bearer ')

    // сохраняем cookie на 30 дней (пользователь сможет обновить протухший токен в течении 30 дней)
    Cookies.set('Authorization', token, { expires: 30 })
  },
  clearToken (state) {
    state.token = null
  }
}

export const actions = {
  async login ({ commit }, formData) {
    try {
      commit('clearToken')

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
        active: true
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
        active: true
      }
      this.commit('notifications/addNewNotice', notice)

      // Вывод полного варианта ошибки
      console.log(err.response)
    }
  },
  logout ({ commit }) {
    // убираем токен из запросов axios
    this.$axios.setToken(false)
    // удаляем из state значение токена
    commit('clearToken')
    // удаляем куки
    Cookies.remove('Authorization')
  }
}
