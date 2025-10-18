import { AppError } from '@shared/errors/app-error'
import { inject, injectable } from 'tsyringe'
import { IUserSessionRepository } from '../repositories/interfaces/IUserSessionRepository'

@injectable()
class LogoutUserUseCase {
  constructor(@inject('UserSessionRepository') private userSessionRepository: IUserSessionRepository) {}

  async execute(token: string): Promise<void> {
    const deleted = await this.userSessionRepository.deleteByToken(token)

    if (!deleted) {
      throw new AppError('Failed to logout user', 500)
    }
  }
}

export { LogoutUserUseCase }
