import { NextFunction, Request, Response } from 'express'
import { createJobSeekerValidation, updateJobSeekerValidation } from './schema/jobSeekerValidation'

async function validateJobSeeker(req: Request, _res: Response, next: NextFunction) {
  const validatedData = await createJobSeekerValidation.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  })

  req.body = validatedData
  next()
}

async function validateUpdateJobSeeker(req: Request, _res: Response, next: NextFunction) {
  const validatedData = await updateJobSeekerValidation.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  })

  req.body = validatedData
  next()
}

export { validateJobSeeker, validateUpdateJobSeeker }
