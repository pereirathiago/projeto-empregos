import { Router } from 'express'
import authRoutes from './authRoutes'
import helloWorldRoutes from './helloWorldRoutes'
import jobSeekersRoutes from './jobSeekerRoutes'

const router = Router()

router.use('/hello-world', helloWorldRoutes)
router.use('/auth', authRoutes)
router.use('/users', jobSeekersRoutes)

export default router
