import { container } from 'tsyringe'
import { HelloWorldRepository } from '@repositories/HelloWorldRepository'
import { IHelloWorldRepository } from '@repositories/interfaces/IHelloWorldRepository'

container.registerSingleton<IHelloWorldRepository>('HelloWorldRepository', HelloWorldRepository)

export { container }
