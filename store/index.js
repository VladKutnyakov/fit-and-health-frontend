import Cookies from 'js-cookie'

export const state = () => ({})
export const getters = {}
export const mutations = {}
export const actions = {
  // этот action вызывается на стороне сервера при запуске SSR
  nuxtServerInit ({dispatch}) {
    // console.log('nuxt server init')
    // выполняем autoLogin, если token хранится в cookies
    let cookieToken = undefined

    if (process.browser) {
      cookieToken = Cookies.get('token')
    } else {
      const headerCookie = this.app.context.req.headers.cookie

      if (headerCookie) {
        cookieToken = headerCookie.split('=')[1]
      }
    }

    if (cookieToken) {
      this.commit('auth/setToken', cookieToken)
    }
  }
}
