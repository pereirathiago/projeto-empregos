import { JobSeekerController } from '@modules/jobSeekers/controllers/JobSeekerController'
import { validateJobSeeker } from '@modules/jobSeekers/validations/validateJobSeeker'
import { Router } from 'express'
import { container } from 'tsyringe'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated'
import { ensureUserRole } from '../middleware/ensureUserRole'

const router = Router()

const jobSeekerController = container.resolve(JobSeekerController)

router.post('/', validateJobSeeker, jobSeekerController.create.bind(jobSeekerController))
router.get('/:id', ensureAuthenticated, ensureUserRole, jobSeekerController.getById.bind(jobSeekerController))

export default router
