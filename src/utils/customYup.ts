import * as yup from 'yup'

const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

yup.addMethod<yup.StringSchema>(yup.string, 'email', function (message?: string) {
  return this.test('email', message || 'invalid_format', function (value) {
    if (!value) return true
    const isValid = strictEmailRegex.test(value)
    return isValid || this.createError({ message: message || 'invalid_format' })
  })
})

export { yup }
