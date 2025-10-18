import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { IAuthenticateUserDTO } from '../dtos/IUserSessionDTO'
import { AuthenticateUserUseCase } from '../useCases/AuthenticateUserUseCase'
import { LogoutUserUseCase } from '../useCases/LogoutUserUseCase'

class AuthController {
  async login(req: Request, res: Response): Promise<Response> {
    const data = req.body as IAuthenticateUserDTO

    const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

    const { token, expires_in } = await authenticateUserUseCase.execute(data)

    return res.status(200).json({ token, expires_in })
  }

  async logout(req: Request, res: Response): Promise<Response> {
    const token = req.user.token

    const logoutUserUseCase = container.resolve(LogoutUserUseCase)

    await logoutUserUseCase.execute(token)

    return res.status(200).json({ message: 'OK' })
  }
}

export { AuthController }
