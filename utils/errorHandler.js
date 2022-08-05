export function errorHandler (that, error, errorCommit, defaultErrorMessage) {
  if (error.response.data.errors) {
    let notifications = ''

    for (let i = 0; i < error.response.data.errors.length; i++) {
      if (error.response.data.errors[i].field) {
        if (errorCommit) {
          that.commit(errorCommit, error.response.data.errors[i])
        }
      } else {
        notifications += error.response.data.errors[i].errorMessage
      }
    }

    const notice = {
      id: Date.now(),
      type: 'alert',
      message: notifications || defaultErrorMessage,
      timeToShow: 5000,
    }
    that.commit('notifications/addNewNotice', notice)
  } else {
    const notice = {
      id: Date.now(),
      type: 'alert',
      message: defaultErrorMessage || 'Неизвестная ошибка',
      timeToShow: 5000,
    }
    that.commit('notifications/addNewNotice', notice)
  }
}
