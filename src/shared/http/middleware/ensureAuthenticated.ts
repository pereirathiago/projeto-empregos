import { config } from '@config/index'
import { IUserRepository } from '@modules/authentication/repositories/interfaces/IUserRepository'
import { IUserSessionRepository } from '@modules/authentication/repositories/interfaces/IUserSessionRepository'
import { UnauthorizedError } from '@shared/errors'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import { container } from 'tsyringe'

interface IPayload {
  sub: string
  username: string
  role: 'user' | 'company'
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new UnauthorizedError()
  }

  const [bearer, token] = authHeader.split(' ')

  if (bearer !== 'Bearer' || !token) {
    throw new UnauthorizedError()
  }

  const { sub: userId, username, role } = verify(token, config.auth.secret_token) as IPayload

  const userSessionRepository = container.resolve<IUserSessionRepository>('UserSessionRepository')
  const session = await userSessionRepository.findByToken(token)

  if (!session) {
    throw new UnauthorizedError()
  }

  if (new Date(session.expires_at) < new Date()) {
    throw new UnauthorizedError()
  }

  const userRepository = container.resolve<IUserRepository>('UserRepository')
  const currentUser = await userRepository.findById(Number(userId))

  if (!currentUser) {
    throw new UnauthorizedError()
  }

  request.user = {
    id: userId,
    username: currentUser.username,
    role: currentUser.role,
    token: token,
  }

  next()
}

export { ensureAuthenticated }
