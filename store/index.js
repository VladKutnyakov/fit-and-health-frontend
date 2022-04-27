export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  // этот action вызывается на стороне сервера при запуске SSR
  nuxtServerInit () {
    const getCookie = (name) => {
      const headerCookie = process.browser ? document.cookie : this.app.context.req.headers.cookie

      if (headerCookie) {
        let matches = headerCookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))

        return matches ? decodeURIComponent(matches[1]) : null
      }

      return null
    }

    // Устанавливаем token, который пришел с запросом из headers cookie
    this.commit('auth/setToken', getCookie('authorization'))

    // Устанавливаем визуальную тему для сайта
    this.dispatch('appSettings/fetchAppTheme')
  }
}
