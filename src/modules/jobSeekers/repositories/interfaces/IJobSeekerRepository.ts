import { ICreateJobSeekerDTO } from '@modules/jobSeekers/dtos/ICreateJobSeekerDTO'
import { IUpdateJobSeekerDTO } from '@modules/jobSeekers/dtos/IUpdateJobSeekerDTO'
import { IJobSeeker, IUserJobSeeker } from '@modules/jobSeekers/models/IJobSeeker'
import { Knex } from 'knex'

interface IJobSeekerRepository {
  create(jobSeekerData: ICreateJobSeekerDTO, trx: Knex.Transaction): Promise<IJobSeeker>
  getByUserId(userId: number, trx?: Knex.Transaction): Promise<IUserJobSeeker | undefined>
  update(userId: number, updateData: IUpdateJobSeekerDTO, trx: Knex.Transaction): Promise<IJobSeeker>
  deleteByUserId(userId: number, trx?: Knex.Transaction): Promise<void>
}

export { IJobSeekerRepository }
