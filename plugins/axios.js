export default function ({ $axios, error: nuxtError, redirect, store }) {

  // Добавление токена в headers (требуется для работы метода vuex nuxtServerInit при первом заходе на страницу сайта)
  $axios.interceptors.request.use(request => {
    // console.log('interceptor')
    if (store.getters['auth/isAuthenticated']) {
      request.headers.common.authorization = `Bearer ${store.state.auth.token}`
    }

    return request
  })

  // Обработка ошибок, приходящих с сервера (для 401 и 500)
  // $axios.onError(error => {
  //   console.log(error.response.status);
  //   if(error.response.status === 401) {
  //     store.dispatch('auth/logout')
  //     redirect('/auth')
  //   }
  // })

}
