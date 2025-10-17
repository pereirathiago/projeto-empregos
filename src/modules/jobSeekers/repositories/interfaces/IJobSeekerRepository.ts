import { ICreateJobSeekerDTO } from '@modules/jobSeekers/dtos/ICreateJobSeekerDTO'
import { IJobSeeker } from '@modules/jobSeekers/models/IJobSeeker'
import { Knex } from 'knex'

interface IJobSeekerRepository {
  create(jobSeekerData: ICreateJobSeekerDTO, trx: Knex.Transaction): Promise<IJobSeeker>
}

export { IJobSeekerRepository }
