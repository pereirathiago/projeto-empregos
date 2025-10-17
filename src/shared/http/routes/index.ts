import { Router } from 'express'
import authRoutes from './authRoutes'
import helloWorldRoutes from './helloWorldRoutes'

const router = Router()

router.use('/hello-world', helloWorldRoutes)
router.use('/auth', authRoutes)

export default router
