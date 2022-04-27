import Cookies from 'js-cookie'

export default {

  setToken (state, token) {
    // Устанавливаем token в state
    state.token = token
    // сохраняем cookie на 30 дней (пользователь сможет обновить протухший токен в течении 30 дней)
    Cookies.set('authorization', token, { expires: 30 })
  },

  logout (state) {
    // удаляем из state значение токена
    state.token = null
    // убираем токен из запросов axios
    this.$axios.setToken(null)
    // удаляем куки
    Cookies.remove('authorization')
  }

}
