export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  // этот action вызывается на стороне сервера при запуске SSR
  nuxtServerInit () {
    const getCookie = (name) => {
      const headerCookie = this.app.context.req.headers.cookie

      console.log(headerCookie)

      if (headerCookie) {
        let matches = headerCookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ))

        return matches ? decodeURIComponent(matches[1]) : undefined
      }

      return null
    }

    // Устанавливаем token, который пришел с запросом из headers cookie
    this.commit('auth/setToken', getCookie('authorization'))
  }
}
