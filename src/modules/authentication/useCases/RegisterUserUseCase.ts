import { ConflictError } from '@shared/errors'
import { hash } from 'bcrypt'
import { Knex } from 'knex'
import { inject, injectable } from 'tsyringe'
import { IRegisterUserDTO } from '../dtos/IUserDTO'
import { IUser } from '../models/IUser'
import { IUserRepository } from '../repositories/interfaces/IUserRepository'

@injectable()
class RegisterUserUseCase {
  constructor(
    @inject('KnexConnection') private db: Knex,
    @inject('UserRepository') private userRepository: IUserRepository,
  ) {}

  async execute(userData: IRegisterUserDTO, trx?: Knex.Transaction): Promise<Omit<IUser, 'password'>> {
    const user = await this.db.transaction(async (trx) => {
      const userAlreadyExists = await this.userRepository.findByUsername(userData.username, trx)
      if (userAlreadyExists) {
        throw new ConflictError('Username already exists')
      }

      const passwordHash = hash(userData.password, 8)

      const newUser = await this.userRepository.create(
        {
          ...userData,
          password: await passwordHash,
        },
        trx,
      )

      return newUser
    })

    delete user.password

    return user
  }
}

export { RegisterUserUseCase }
