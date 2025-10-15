import { HelloWorldRepository } from '@modules/common/repositories/HelloWorldRepository'
import { IHelloWorldRepository } from '@modules/common/repositories/interfaces/IHelloWorldRepository'
import { container } from 'tsyringe'

container.registerSingleton<IHelloWorldRepository>('HelloWorldRepository', HelloWorldRepository)

export { container }
