import { ICreateJobSeekerUserDTO } from '@modules/jobSeekers/dtos/ICreateJobSeekerDTO'
import { yup } from '@utils/customYup'
import * as Yup from 'yup'

const createJobSeekerValidation: Yup.ObjectSchema<ICreateJobSeekerUserDTO> = Yup.object().shape({
  name: Yup.string()
    .required()
    .min(4)
    .max(150)
    .transform((value) => value?.toUpperCase()),
  username: Yup.string()
    .required()
    .min(3)
    .max(20)
    .matches(/^[a-zA-Z0-9]+$/, 'invalid_format'),
  password: Yup.string()
    .required()
    .min(3)
    .max(20)
    .matches(/^[a-zA-Z0-9]+$/, 'invalid_format'),
  email: yup.string().optional().email('invalid_format'),
  phone: Yup.string()
    .optional()
    .test('phone-validation', 'invalid_format', function (value) {
      if (!value || value === '') return true
      if (value.length < 10 || value.length > 14) return false
      return true
    }),
  experience: Yup.string()
    .optional()
    .test('experience-validation', 'too_short', function (value) {
      if (!value || value === '') return true
      if (value.length < 10) return false
      if (value.length > 600) {
        this.createError({ message: 'too_long' })
        return false
      }
      return true
    }),
  education: Yup.string()
    .optional()
    .test('education-validation', 'too_short', function (value) {
      if (!value || value === '') return true
      if (value.length < 10) return false
      if (value.length > 600) {
        this.createError({ message: 'too_long' })
        return false
      }
      return true
    }),
})

export { createJobSeekerValidation }
