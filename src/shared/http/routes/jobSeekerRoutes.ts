import { JobSeekerController } from '@modules/jobSeekers/controllers/JobSeekerController'
import { validateJobSeeker, validateUpdateJobSeeker } from '@modules/jobSeekers/validations/validateJobSeeker'
import { Router } from 'express'
import { container } from 'tsyringe'
import { ensureAuthenticated } from '../middleware/ensureAuthenticated'
import { ensureUserRole } from '../middleware/ensureUserRole'

const router = Router()

const jobSeekerController = container.resolve(JobSeekerController)

router.post('/', validateJobSeeker, jobSeekerController.create.bind(jobSeekerController))
router.get('/:id', ensureAuthenticated, ensureUserRole, jobSeekerController.getByUserId.bind(jobSeekerController))
router.patch(
  '/:id',
  ensureAuthenticated,
  ensureUserRole,
  validateUpdateJobSeeker,
  jobSeekerController.update.bind(jobSeekerController),
)
router.delete('/:id', ensureAuthenticated, ensureUserRole, jobSeekerController.delete.bind(jobSeekerController))

export default router
