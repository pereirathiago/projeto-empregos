import { IUserRepository } from '@modules/authentication/repositories/interfaces/IUserRepository'
import { UserRepository } from '@modules/authentication/repositories/UserRepository'
import { HelloWorldRepository } from '@modules/common/repositories/HelloWorldRepository'
import { IHelloWorldRepository } from '@modules/common/repositories/interfaces/IHelloWorldRepository'
import { db } from '@shared/database/connection'
import { container } from 'tsyringe'

container.register('KnexConnection', { useValue: db })
container.registerSingleton<IHelloWorldRepository>('HelloWorldRepository', HelloWorldRepository)
container.registerSingleton<IUserRepository>('UserRepository', UserRepository)

export { container }
