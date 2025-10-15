import { Router } from 'express'
import helloWorldRoutes from './helloWorldRoutes'

const router = Router()

router.use('/hello-world', helloWorldRoutes)

export default router
