const generateForm = (fields) => {
  const errors = {}

  for (const key in fields) {
    errors[key] = {
      enabled: false,
      errorMessage: null
    }
  }

  return {
    fields: fields,
    errors: errors
  }
}

const setFormFieldsValue = (form, payload) => {
  for (const key in form.fields) {
    form.fields[key] = payload[key]
    form.errors[key] = {
      enabled: false,
      errorMessage: null
    }
  }
}

const setFormFieldValue = (form, ctx) => {
  form.fields[ctx.field] = ctx.newValue
  form.errors[ctx.field] = {
    enabled: false,
    errorMessage: null
  }
}

const setFormFieldError = (form, ctx) => {
  form.errors[ctx.field] = ctx.errorMessage
}

export {
  generateForm,
  setFormFieldsValue,
  setFormFieldValue,
  setFormFieldError,
}
