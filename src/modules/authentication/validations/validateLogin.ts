import { NextFunction, Request, Response } from 'express'
import { loginValidation } from './schema/loginValidation'

async function validateLogin(req: Request, _res: Response, next: NextFunction) {
  const validatedData = await loginValidation.validate(req.body, {
    abortEarly: false,
    stripUnknown: true,
  })

  req.body = validatedData
  next()
}

export { validateLogin }
