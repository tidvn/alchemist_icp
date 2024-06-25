export const createFormData = (data) => {
  const formData = new FormData()

  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      const value = data[key]

      if (value instanceof File) {
        formData.append(key, value)
      } else if (Array.isArray(value)) {
        value.forEach((item, index) => {
          formData.append(`${key}[${index}]`, item)
        })
      } else if (typeof value === 'object') {
        Object.keys(value).forEach((nestedKey) => {
          formData.append(`${key}[${nestedKey}]`, value[nestedKey])
        })
      } else {
        formData.append(key, value)
      }
    }
  }

  return formData
}
