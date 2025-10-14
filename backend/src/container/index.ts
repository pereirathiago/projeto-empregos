import { HelloWorldRepository } from '@repositories/HelloWorldRepository'
import { IHelloWorldRepository } from '@repositories/interfaces/IHelloWorldRepository'
import { container } from 'tsyringe'

container.registerSingleton<IHelloWorldRepository>('HelloWorldRepository', HelloWorldRepository)

export { container }
