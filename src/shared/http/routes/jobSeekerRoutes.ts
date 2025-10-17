import { JobSeekerController } from '@modules/jobSeekers/controllers/JobSeekerController'
import { Router } from 'express'
import { container } from 'tsyringe'

const router = Router()

const jobSeekerController = container.resolve(JobSeekerController)

router.post('/', jobSeekerController.create.bind(jobSeekerController))

export default router
