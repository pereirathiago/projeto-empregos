import { Knex } from 'knex'
import { inject, injectable } from 'tsyringe'
import { ICreateJobSeekerDTO } from '../dtos/ICreateJobSeekerDTO'
import { IUpdateJobSeekerDTO } from '../dtos/IUpdateJobSeekerDTO'
import { IJobSeeker, IUserJobSeeker } from '../models/IJobSeeker'
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

  async getByUserId(userId: number, trx?: Knex.Transaction): Promise<IUserJobSeeker | undefined> {
    const connection = trx || this.db

    const jobSeeker = await connection('job_seekers as js')
      .join('users as u', 'js.user_id', 'u.id')
      .select('u.id', 'u.name', 'u.username', 'u.email', 'u.phone', 'js.experience', 'js.education')
      .where('u.id', userId)
      .first()

    if (!jobSeeker) return undefined

    return {
      name: jobSeeker.name,
      username: jobSeeker.username,
      email: jobSeeker.email,
      phone: jobSeeker.phone,
      experience: jobSeeker.experience,
      education: jobSeeker.education,
    }
  }

  async update(userId: number, updateData: IUpdateJobSeekerDTO, trx: Knex.Transaction): Promise<IJobSeeker> {
    const connection = trx || this.db

    const [updatedJobSeeker] = await connection('job_seekers')
      .where({ user_id: userId })
      .update({
        experience: updateData.experience,
        education: updateData.education,
      })
      .returning('*')

    return updatedJobSeeker
  }

  async deleteByUserId(userId: number, trx?: Knex.Transaction): Promise<void> {
    const connection = trx || this.db

    await connection('job_seekers').where({ user_id: userId }).delete()
  }
}

export { JobSeekerRepository }
