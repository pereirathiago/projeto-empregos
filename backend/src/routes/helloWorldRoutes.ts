import { Router } from 'express'
import { HelloWorldController } from '@controllers/HelloWorldController'
import { container } from 'tsyringe'

const router = Router()

const helloWorldController = container.resolve(HelloWorldController)

router.get('/', (req, res) => helloWorldController.getHelloWorld(req, res))

export default router
