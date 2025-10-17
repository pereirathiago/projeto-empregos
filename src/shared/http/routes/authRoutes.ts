import { UserController } from '@modules/authentication/controllers/UserController'
import { Router } from 'express'
import { container } from 'tsyringe'

const router = Router()

const registerUserController = container.resolve(UserController)

// router.post('/register', registerUserController.register.bind(registerUserController))

export default router
