import { ICreateJobSeekerDTO } from '@modules/jobSeekers/dtos/ICreateJobSeekerDTO'
import { IJobSeeker, IUserJobSeeker } from '@modules/jobSeekers/models/IJobSeeker'
import { Knex } from 'knex'

interface IJobSeekerRepository {
  create(jobSeekerData: ICreateJobSeekerDTO, trx: Knex.Transaction): Promise<IJobSeeker>
  getById(id: number, trx?: Knex.Transaction): Promise<IUserJobSeeker | undefined>
}

export { IJobSeekerRepository }
