import { ValidationError } from '@shared/errors/http'
import { NextFunction, Request, Response } from 'express'
import { createJobSeekerValidation } from './schema/jobSeekerValidation'

async function validateJobSeeker(req: Request, _res: Response, next: NextFunction) {
  try {
    const validatedData = await createJobSeekerValidation.validate(req.body, {
      abortEarly: false,
      stripUnknown: true,
    })

    req.body = validatedData
    next()
  } catch (error: any) {
    const details = error.inner.map((err: any) => {
      let errorMessage = 'invalid'

      switch (err.type) {
        case 'required':
          errorMessage = 'required'
          break
        case 'min':
          errorMessage = 'too_short'
          break
        case 'max':
          errorMessage = 'too_long'
          break
        case 'matches':
        case 'email':
          errorMessage = 'invalid_format'
          break
      }

      return { field: err.path, error: errorMessage }
    })
    throw new ValidationError(details)
  }
}

export { validateJobSeeker }
