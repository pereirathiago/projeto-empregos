import { ICreateJobSeekerUserDTO } from '@modules/jobSeekers/dtos/ICreateJobSeekerDTO'
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
  email: Yup.string().optional().email('invalid_format'),
  phone: Yup.string().optional().min(10).max(14).matches(/^\d+$/, 'invalid_format'),
  experience: Yup.string().optional().min(10).max(600),
  education: Yup.string().optional().min(10).max(600),
})

export { createJobSeekerValidation }
