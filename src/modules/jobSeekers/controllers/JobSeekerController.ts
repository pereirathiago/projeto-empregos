import { ForbiddenError } from '@shared/errors'
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ICreateJobSeekerUserDTO } from '../dtos/ICreateJobSeekerDTO'
import { CreateJobSeekerUseCase } from '../useCases/CreateJobSeekerUseCase'
import { DeleteJobSeekerUseCase } from '../useCases/DeleteJobSeekerUseCase'
import { GetJobSeekerUseCase } from '../useCases/GetJobSeekerUseCase'
import { UpdateJobSeekerUseCase } from '../useCases/UpdateJobSeekerUseCase'

class JobSeekerController {
  async create(req: Request, res: Response): Promise<Response> {
    const data = req.body as ICreateJobSeekerUserDTO

    const createJobSeekerUseCase = container.resolve(CreateJobSeekerUseCase)

    const jobSeeker = await createJobSeekerUseCase.execute(data)

    return res.status(201).json({ message: 'Created' })
  }

  async getByUserId(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const user = req.user

    if (user.id !== id) {
      throw new ForbiddenError()
    }

    const getJobSeekerUseCase = container.resolve(GetJobSeekerUseCase)

    const jobSeeker = await getJobSeekerUseCase.execute(Number(id))

    return res.status(200).json(jobSeeker)
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const user = req.user
    const data = req.body

    if (user.id !== id) {
      throw new ForbiddenError()
    }

    const updateJobSeekerUseCase = container.resolve(UpdateJobSeekerUseCase)

    const jobSeeker = await updateJobSeekerUseCase.execute(Number(id), data)

    return res.status(200).json()
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const user = req.user

    if (!user || user.id !== id) {
      throw new ForbiddenError()
    }

    const deleteJobSeekerUseCase = container.resolve(DeleteJobSeekerUseCase)

    await deleteJobSeekerUseCase.execute(Number(id))

    return res.status(200).json({ message: 'User deleted successfully' })
  }
}

export { JobSeekerController }
