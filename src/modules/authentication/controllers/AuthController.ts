import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { IAuthenticateUserDTO } from '../dtos/IUserSessionDTO'
import { AuthenticateUserUseCase } from '../useCases/AuthenticateUserUseCase'

class AuthController {
  async login(req: Request, res: Response): Promise<Response> {
    const data = req.body as IAuthenticateUserDTO

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const { token, expires_in } = await authenticateUserUseCase.execute(data)

    return res.status(200).json({ token, expires_in })
  }
}

export { AuthController }
