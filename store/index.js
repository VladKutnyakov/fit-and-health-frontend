export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {

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

    if (getCookie('authorization')) {
      this.commit('auth/setAccessToken', getCookie('authorization'))
      this.dispatch('profile/fetchUserInfo')
    }

    // Устанавливаем визуальную тему для сайта
    this.commit('settings/setAppTheme', getCookie('appTheme') || 'LIGHT')
  },

}
