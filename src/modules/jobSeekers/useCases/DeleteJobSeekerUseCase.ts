import { IUserRepository } from '@modules/authentication/repositories/interfaces/IUserRepository'
import { NotFoundError } from '@shared/errors'
import { Knex } from 'knex'
import { inject, injectable } from 'tsyringe'
import { IJobSeekerRepository } from '../repositories/interfaces/IJobSeekerRepository'

@injectable()
class DeleteJobSeekerUseCase {
  constructor(
    @inject('KnexConnection') private db: Knex,
    @inject('JobSeekerRepository') private jobSeekerRepository: IJobSeekerRepository,
    @inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(userId: number): Promise<void> {
    await this.db.transaction(async (trx) => {
      const user = await this.userRepository.findById(userId, trx)

      if (!user) {
        throw new NotFoundError()
      }

      const jobSeeker = await this.jobSeekerRepository.getByUserId(userId, trx)

      if (!jobSeeker) {
        throw new NotFoundError()
      }

      await this.jobSeekerRepository.deleteByUserId(userId, trx)

      await this.userRepository.delete(userId, trx)
    })
  }
}

export { DeleteJobSeekerUseCase }
