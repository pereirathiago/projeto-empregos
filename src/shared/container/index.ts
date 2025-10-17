import { IUserRepository } from '@modules/authentication/repositories/interfaces/IUserRepository'
import { UserRepository } from '@modules/authentication/repositories/UserRepository'
import { HelloWorldRepository } from '@modules/common/repositories/HelloWorldRepository'
import { IHelloWorldRepository } from '@modules/common/repositories/interfaces/IHelloWorldRepository'
import { IJobSeekerRepository } from '@modules/jobSeekers/repositories/interfaces/IJobSeekerRepository'
import { JobSeekerRepository } from '@modules/jobSeekers/repositories/JobSeekerRerpository'
import { db } from '@shared/database/connection'
import { container } from 'tsyringe'

container.register('KnexConnection', { useValue: db })
container.registerSingleton<IHelloWorldRepository>('HelloWorldRepository', HelloWorldRepository)
container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
container.registerSingleton<IJobSeekerRepository>('JobSeekerRepository', JobSeekerRepository)

export { container }
