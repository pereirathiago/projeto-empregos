import { ForbiddenError } from '@shared/errors'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ICreateJobSeekerUserDTO } from '../dtos/ICreateJobSeekerDTO'
import { CreateJobSeekerUseCase } from '../useCases/CreateJobSeekerUseCase'
import { GetJobSeekerUseCase } from '../useCases/GetJobSeekerUseCase'

class JobSeekerController {
  async create(req: Request, res: Response): Promise<Response> {
    const data = req.body as ICreateJobSeekerUserDTO

    const createJobSeekerUseCase = container.resolve(CreateJobSeekerUseCase)

    const jobSeeker = await createJobSeekerUseCase.execute(data)

    return res.status(201).json({ message: 'Created' })
  }

  async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const user = req.user

    if (user.id !== id) {
      throw new ForbiddenError()
    }

    const getJobSeekerUseCase = container.resolve(GetJobSeekerUseCase)

    const jobSeeker = await getJobSeekerUseCase.execute(Number(id))

    return res.status(200).json(jobSeeker)
  }
}

export { JobSeekerController }
