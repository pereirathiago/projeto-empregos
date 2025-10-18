import { ForbiddenError } from '@shared/errors'
import { NextFunction, Request, Response } from 'express'

async function ensureUserRole(request: Request, response: Response, next: NextFunction) {
  const user = request.user

  if (!user) {
    throw new ForbiddenError()
  }

  if (user.role !== 'user') {
    throw new ForbiddenError()
  }

  next()
}

export { ensureUserRole }
