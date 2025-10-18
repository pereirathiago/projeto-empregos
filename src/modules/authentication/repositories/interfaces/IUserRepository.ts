import { IUpdateUserDTO } from '@modules/authentication/dtos/IUpdateUserDTO'
import { IRegisterUserDTO } from '@modules/authentication/dtos/IUserDTO'
import { IUser } from '@modules/authentication/models/IUser'
import { Knex } from 'knex'

interface IUserRepository {
  create(userData: IRegisterUserDTO, trx: Knex.Transaction): Promise<IUser>
  findByEmail(email: string, trx?: Knex.Transaction): Promise<IUser | undefined>
  findByUsername(username: string, trx?: Knex.Transaction): Promise<IUser | undefined>
  findById(id: number, trx?: Knex.Transaction): Promise<IUser | undefined>
  update(id: number, updateData: IUpdateUserDTO, trx: Knex.Transaction): Promise<IUser>
  delete(id: number, trx?: Knex.Transaction): Promise<void>
}

export { IUserRepository }
