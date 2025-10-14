import { IHelloWorldRepository } from '@repositories/interfaces/IHelloWorldRepository'
import { Request, Response } from 'express'
import { inject, injectable } from 'tsyringe'

@injectable()
class HelloWorldController {
  constructor(
    @inject('HelloWorldRepository')
    private helloWorldRepository: IHelloWorldRepository,
  ) {}

  async getHelloWorld(req: Request, res: Response): Promise<Response> {
    const message = await this.helloWorldRepository.getMessage()
    return res.status(200).json({ message })
  }
}

export { HelloWorldController }
