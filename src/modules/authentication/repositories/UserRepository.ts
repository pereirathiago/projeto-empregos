import { Knex } from 'knex'
import { inject, injectable } from 'tsyringe'
import { IRegisterUserDTO } from '../dtos/IUserDTO'
import { IUser } from '../models/IUser'
import { IUserRepository } from './interfaces/IUserRepository'

@injectable()
class UserRepository implements IUserRepository {
  constructor(@inject('KnexConnection') private db: Knex) {}

  async create(userData: IRegisterUserDTO, trx: Knex.Transaction): Promise<IUser> {
    const [user] = await trx('users')
      .insert({
        ...userData,
      })
      .returning('*')

    return user
  }

  findByEmail(email: string): Promise<IUser | undefined> {
    throw new Error('Method not implemented.')
  }

  async findByUsername(username: string, trx?: Knex.Transaction): Promise<IUser | undefined> {
    const connection = trx || this.db

    const user = await connection('users').where({ username }).first()

    return user
  }
}

export { UserRepository }
