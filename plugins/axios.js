export default function ({ $axios, error: nuxtError, redirect, store }) {

  // Добавление токена в headers (требуется для работы метода vuex nuxtServerInit при первом заходе на страницу сайта)
  // $axios.interceptors.request.use(request => {
  //   // console.log('interceptor')
  //   if (store.getters['auth/isAuthenticated']) {
  //     request.headers.common.authorization = `Bearer ${store.state.auth.token}`
  //   }

  //   return request
  // })

  // Проверяем есть ли в ответе на запрос обновленный token авторизации. Если token есть -> обновляем его в store
  // $axios.interceptors.response.use((response) => {
  //   if (response.headers['updated-token']) {
  //     store.commit('auth/setToken', response.headers['updated-token'])
  //   }
  //   return response
  // })

  // Обработка ошибок, приходящих с сервера (для 401 и 500)
  // $axios.onError(error => {
  //   // Проверяем есть ли в ответе на запрос обновленный token авторизации. Если token есть -> обновляем его в store
  //   if (error.response.headers['updated-token']) {
  //     store.commit('auth/setToken', error.response.headers['updated-token'])
  //   }
  //   // console.log(error.response.status);
  //   if(error.response.status === 401) {
  //     store.commit('auth/logout')
  //     redirect('/auth')
  //   }
  // })

}
