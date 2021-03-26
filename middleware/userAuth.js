// Проверка, записан ли токен в стор.
// Если токен в сторе есть, значит юзер залогинен и нужно перейти к главной странице.
// Если токена нет значит юзер не залогинен и его нужно перенаправить на страницу авторизации.
export default function ({ route, store, redirect }) {
  if (store.getters['auth/isAuthenticated']) {
    // console.log('пользователь авторизован')
    // Если token установлен перенаправлять пользователя на страницу профиля
    if (route.path === '/auth') {
      return redirect('/profile')
    }
  } else {
    // console.log('пользователь НЕ авторизован')
    if (route.path !== '/auth') {
      return redirect('/auth')
    }
  }
}
