import { RegisterUserUseCase } from '@modules/authentication/useCases/RegisterUserUseCase'
import { AppError } from '@shared/errors/app-error'
import { Knex } from 'knex'
import { inject, injectable } from 'tsyringe'
import { ICreateJobSeekerUserDTO } from '../dtos/ICreateJobSeekerDTO'
import { IJobSeeker } from '../models/IJobSeeker'
import { IJobSeekerRepository } from '../repositories/interfaces/IJobSeekerRepository'

@injectable()
class CreateJobSeekerUseCase {
  constructor(
    @inject('KnexConnection') private db: Knex,
    @inject('JobSeekerRepository') private jobSeekerRepository: IJobSeekerRepository,
    private registerUserUseCase: RegisterUserUseCase,
  ) {}

  async execute(data: ICreateJobSeekerUserDTO): Promise<IJobSeeker> {
    const jobSeekerProfile = await this.db.transaction(async (trx) => {
      const newUser = await this.registerUserUseCase.execute(
        {
          name: data.name,
          username: data.username,
          password: data.password,
          phone: data.phone,
          email: data.email,
          role: 'user',
        },
        trx,
      )

      if (!newUser.id) {
        throw new AppError('User not created', 500)
      }

      const newProfile = await this.jobSeekerRepository.create(
        {
          user_id: newUser.id,
          education: data.education,
          experience: data.experience,
        },
        trx,
      )

      if (!newProfile.id) {
        throw new AppError('Job seeker not created', 500)
      }

      return newProfile
    })

    return jobSeekerProfile
  }
}

export { CreateJobSeekerUseCase }
