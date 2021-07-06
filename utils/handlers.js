// Получить доступ к vuex store
let store = undefined
if (process.browser) {
  window.onNuxtReady(({$store}) => {
    store = $store
  })
}

// Установить гачальные значения для поля формы
const setDefaultFormFields = () => {}

// Установить значение для поля формы
const setFormField = () => {}

// Установить ошибку для поля формы
const setFormError = () => {}

// Очистить ошибку для поля формы
const clearFormError = () => {}

// Валидация на заполенение полей
const requiredFieldsValidation = (form, requiredFields, setErrorFunc, errorMessage) => {
  let valid = true

  for (let i = 0; i < requiredFields.length; i++) {
    if (!form.fields[requiredFields[i]]) {
      valid = false
      store.commit(setErrorFunc, {field: requiredFields[i], errorMessage: errorMessage})
    }
  }

  return valid
}

export {
  setDefaultFormFields,
  setFormField,
  setFormError,
  clearFormError,
  requiredFieldsValidation
}