import { Knex } from 'knex'
import { inject, injectable } from 'tsyringe'
import { ICreateJobSeekerDTO } from '../dtos/ICreateJobSeekerDTO'
import { IJobSeeker } from '../models/IJobSeeker'
import { IJobSeekerRepository } from './interfaces/IJobSeekerRepository'

@injectable()
class JobSeekerRepository implements IJobSeekerRepository {
  constructor(@inject('KnexConnection') private db: Knex) {}

  async create(jobSeekerData: ICreateJobSeekerDTO, trx: Knex.Transaction): Promise<IJobSeeker> {
    const [createdJobSeeker] = await trx('job_seekers')
      .insert({
        user_id: jobSeekerData.user_id,
        experience: jobSeekerData.experience,
        education: jobSeekerData.education,
      })
      .returning('*')

    return createdJobSeeker
  }
}

export { JobSeekerRepository }
