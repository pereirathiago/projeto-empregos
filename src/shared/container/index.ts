import { IUserRepository } from '@modules/authentication/repositories/interfaces/IUserRepository'
import { IUserSessionRepository } from '@modules/authentication/repositories/interfaces/IUserSessionRepository'
import { UserRepository } from '@modules/authentication/repositories/UserRepository'
import { UserSessionRepository } from '@modules/authentication/repositories/UserSessionRepository'
import { HelloWorldRepository } from '@modules/common/repositories/HelloWorldRepository'
import { IHelloWorldRepository } from '@modules/common/repositories/interfaces/IHelloWorldRepository'
import { IJobSeekerRepository } from '@modules/jobSeekers/repositories/interfaces/IJobSeekerRepository'
import { JobSeekerRepository } from '@modules/jobSeekers/repositories/JobSeekerRerpository'
import { db } from '@shared/database/connection'
import { container } from 'tsyringe'

container.register('KnexConnection', { useValue: db })
container.registerSingleton<IHelloWorldRepository>('HelloWorldRepository', HelloWorldRepository)
container.registerSingleton<IUserRepository>('UserRepository', UserRepository)
container.registerSingleton<IUserSessionRepository>('UserSessionRepository', UserSessionRepository)
container.registerSingleton<IJobSeekerRepository>('JobSeekerRepository', JobSeekerRepository)

export { container }
