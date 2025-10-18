import { ICreateUserSessionDTO } from '@modules/authentication/dtos/IUserSessionDTO'
import { IUserSession } from '@modules/authentication/models/IUserSession'
import { Knex } from 'knex'

interface IUserSessionRepository {
  create(sessionData: ICreateUserSessionDTO, trx?: Knex.Transaction): Promise<IUserSession>
  findByToken(token: string, trx?: Knex.Transaction): Promise<IUserSession | undefined>
  findByUserId(userId: number, trx?: Knex.Transaction): Promise<IUserSession[]>
  deleteByToken(token: string, trx?: Knex.Transaction): Promise<void>
  deleteExpiredSessions(trx?: Knex.Transaction): Promise<void>
}

export { IUserSessionRepository }
