import { NextFunction, Request, Response } from 'express'
import { createJobSeekerValidation } from './schema/jobSeekerValidation'

async function validateJobSeeker(req: Request, _res: Response, next: NextFunction) {
  const validatedData = await createJobSeekerValidation.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  })

  req.body = validatedData
  next()
}

export { validateJobSeeker }
