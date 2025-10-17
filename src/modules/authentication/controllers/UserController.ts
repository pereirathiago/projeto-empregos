import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RegisterUserUseCase } from '../useCases/RegisterUserUseCase'

class UserController {
  async register(req: Request, res: Response): Promise<Response> {
    const { name, username, email, password, phone, role } = req.body

    const registerUserUseCase = container.resolve(RegisterUserUseCase)

    const user = await registerUserUseCase.execute({
      name,
      username,
      email,
      password,
      phone,
      role,
    })

    return res.status(201).json({ message: 'Created' })
  }
}

export { UserController }
