export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {

  // этот action вызывается на стороне сервера при запуске SSR
  async nuxtServerInit () {
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
    this.commit('auth/setAccessToken', getCookie('authorization'))

    // Устанавливаем визуальную тему для сайта
    this.commit('settings/setAppTheme', getCookie('appTheme') || 'LIGHT')
  },

}
