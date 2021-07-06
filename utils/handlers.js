// Получить доступ к vuex store
let store = undefined
if (process.browser) {
  window.onNuxtReady(({$store}) => {
    store = $store
  })
}

// Валидация на заполенение полей
/**
  * @param {object} form Объект с полями и ошибками формы
  * @param {string[]} requiredFields Массив полей формы, которые необходимо проверить на наличие значения
  * @param {string} setErrorFunc Функция для установки ошибок полей формы, 'module/function'
  * @param {string} [errorMessage] Текст сообщения об ошибке
*/
const requiredFieldsValidation = (form, requiredFields, setErrorFunc, errorMessage) => {
  let valid = true

  for (let i = 0; i < requiredFields.length; i++) {
    if (!form.fields[requiredFields[i]]) {
      valid = false
      store.commit(setErrorFunc, {field: requiredFields[i], enabled: true, errorMessage: errorMessage})
    }
  }

  return valid
}

export {
  requiredFieldsValidation
}