import { AuthController } from '@modules/authentication/controllers/AuthController'
import { UserController } from '@modules/authentication/controllers/UserController'
import { validateLogin } from '@modules/authentication/validations/validateLogin'
import { Router } from 'express'
import { container } from 'tsyringe'

const router = Router()

const registerUserController = container.resolve(UserController)
const authController = container.resolve(AuthController)

// router.post('/register', registerUserController.register.bind(registerUserController))
router.post('/login', validateLogin, authController.login.bind(authController))

export default router
