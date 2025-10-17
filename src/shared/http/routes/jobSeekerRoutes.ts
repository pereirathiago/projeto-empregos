import { JobSeekerController } from '@modules/jobSeekers/controllers/JobSeekerController'
import { validateJobSeeker } from '@modules/jobSeekers/validations/validateJobSeeker'
import { Router } from 'express'
import { container } from 'tsyringe'

const router = Router()

const jobSeekerController = container.resolve(JobSeekerController)

router.post('/', validateJobSeeker, jobSeekerController.create.bind(jobSeekerController))

export default router
