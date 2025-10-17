import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateJobSeekerUseCase } from '../useCases/CreateJobSeekerUseCase'

class JobSeekerController {
  async create(req: Request, res: Response): Promise<Response> {
    const data = req.body

    const createJobSeekerUseCase = container.resolve(CreateJobSeekerUseCase)

    const jobSeeker = await createJobSeekerUseCase.execute(data)

    return res.status(201).json(jobSeeker)
  }
}

export { JobSeekerController }
