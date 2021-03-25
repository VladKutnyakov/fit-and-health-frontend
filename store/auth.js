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
  },
  clearToken (state) {
    state.token = null
  }
}

export const actions = {
  async login ({ commit }, formData) {
    try {
      commit('clearToken')

      const fetchedToken = await this.$axios.$post('http://localhost:3030/api/login', formData)

      // добавляем токен к запросам axios
      this.$axios.setToken(fetchedToken, 'Bearer ')
      // сохроняем в state токен полученный из action login
      commit('setToken', fetchedToken)
      // сохраняем cookie на 361 день
      Cookies.set('Authorization', fetchedToken, { expires: 365 })
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
  },
  async createUser ({ commit }, formData) {
    try {
      const newUserToken = await this.$axios.$post('http://localhost:3030/api/register', formData)
      // добавляем токен к запросам axios
      this.$axios.setToken(newUserToken, 'Bearer ')
      // сохроняем в state токен полученный из action login
      commit('setToken', newUserToken)
      // сохраняем cookie на 361 день
      Cookies.set('Authorization', newUserToken, { expires: 365 })
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
}
