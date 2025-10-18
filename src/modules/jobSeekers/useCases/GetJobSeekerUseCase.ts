import { NotFoundError } from '@shared/errors'
import { inject, injectable } from 'tsyringe'
import { IUserJobSeeker } from '../models/IJobSeeker'
import { IJobSeekerRepository } from '../repositories/interfaces/IJobSeekerRepository'

@injectable()
class GetJobSeekerUseCase {
  constructor(@inject('JobSeekerRepository') private jobSeekerRepository: IJobSeekerRepository) {}

  async execute(id: number): Promise<IUserJobSeeker> {
    const jobSeeker = await this.jobSeekerRepository.getById(id)

    if (!jobSeeker) {
      throw new NotFoundError('User not found')
    }

    return jobSeeker
  }
}

export { GetJobSeekerUseCase }
