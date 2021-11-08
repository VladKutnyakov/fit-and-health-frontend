const formGenerator = (fields) => {

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

export {
  formGenerator
}
