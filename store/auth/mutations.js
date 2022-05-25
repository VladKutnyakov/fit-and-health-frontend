import Cookies from 'js-cookie'

export default {

  setAccessToken (state, token) {
    state.accessToken = token
    Cookies.set('authorization', token, { expires: 30 }) // сохраняем cookie на 30 дней
  },
  clearAccessToken (state) {
    state.accessToken = null
    Cookies.remove('authorization') // удаляем cookie
  },

  // setRefreshToken (state, token) {
  //   state.accessToken = token
  // },

  setModalVisibility (state, ctx) {
    state[ctx.modal] = ctx.condition
  },

}
