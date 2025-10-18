import { AuthController } from '@modules/authentication/controllers/AuthController'
import { UserController } from '@modules/authentication/controllers/UserController'
import { validateLogin } from '@modules/authentication/validations/validateLogin'
import { Router } from 'express'
import { container } from 'tsyringe'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated'

const router = Router()

const registerUserController = container.resolve(UserController)
const authController = container.resolve(AuthController)

// router.post('/register', registerUserController.register.bind(registerUserController))
router.post('/login', validateLogin, authController.login.bind(authController))
router.post('/logout', ensureAuthenticated, authController.logout.bind(authController))

export default router
