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

const setForm = (form, payload) => {
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

const clearForm = (form) => {
  for (const key in form.fields) {
    if (Array.isArray(form.fields[key])) {
      form.fields[key] = []
    } else if (typeof form.fields[key] === 'boolean') {
      form.fields[key] = false
    } else {
      form.fields[key] = null
    }
  }

  for (const key in form.errors) {
    form.errors[key] = {
      enabled: false,
      errorMessage: null
    }
  }
}

export {
  generateForm,
  setForm,
  setFormFieldValue,
  setFormFieldError,
  clearForm,
}
