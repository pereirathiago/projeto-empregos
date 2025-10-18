import { Knex } from 'knex'
import { inject, injectable } from 'tsyringe'
import { ICreateUserSessionDTO } from '../dtos/IUserSessionDTO'
import { IUserSession } from '../models/IUserSession'
import { IUserSessionRepository } from './interfaces/IUserSessionRepository'

@injectable()
class UserSessionRepository implements IUserSessionRepository {
  constructor(@inject('KnexConnection') private db: Knex) {}

  async create(sessionData: ICreateUserSessionDTO, trx?: Knex.Transaction): Promise<IUserSession> {
    const connection = trx || this.db

    const [session] = await connection('user_sessions')
      .insert({
        user_id: sessionData.user_id,
        token: sessionData.token,
        expires_at: sessionData.expires_at,
      })
      .returning('*')

    return session
  }

  async findByToken(token: string, trx?: Knex.Transaction): Promise<IUserSession | undefined> {
    const connection = trx || this.db

    const session = await connection('user_sessions').where({ token }).first()

    return session
  }

  async findByUserId(userId: number, trx?: Knex.Transaction): Promise<IUserSession[]> {
    const connection = trx || this.db

    const sessions = await connection('user_sessions').where({ user_id: userId })

    return sessions
  }

  async deleteByToken(token: string, trx?: Knex.Transaction): Promise<void> {
    const connection = trx || this.db

    await connection('user_sessions').where({ token }).delete()
  }

  async deleteExpiredSessions(trx?: Knex.Transaction): Promise<void> {
    const connection = trx || this.db

    await connection('user_sessions').where('expires_at', '<', new Date()).delete()
  }
}

export { UserSessionRepository }
