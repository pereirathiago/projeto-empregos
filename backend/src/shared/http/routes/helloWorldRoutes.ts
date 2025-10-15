import { HelloWorldController } from '@modules/common/controllers/HelloWorldController'
import { Router } from 'express'
import { container } from 'tsyringe'

const router = Router()

const helloWorldController = container.resolve(HelloWorldController)

router.get('/', helloWorldController.getHelloWorld.bind(helloWorldController))

export default router
