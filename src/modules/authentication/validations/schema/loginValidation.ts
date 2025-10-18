import { IAuthenticateUserDTO } from '@modules/authentication/dtos/IUserSessionDTO'
import * as Yup from 'yup'

const loginValidation: Yup.ObjectSchema<IAuthenticateUserDTO> = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
})

export { loginValidation }
