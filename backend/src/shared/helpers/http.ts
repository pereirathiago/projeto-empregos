import { ConflictError, ForbiddenError, NotFoundError, SendMailError, ServerError, UnauthorizedError } from '@shared/errors'
import { AppError } from '@shared/errors/app-error'

export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const ok = <T = any>(data: T): HttpResponse<T> => ({
  statusCode: 200,
  data,
})

export const noContent = (): HttpResponse => ({
  statusCode: 204,
  data: null,
})

export const badRequest = (error: Error): HttpResponse<Error> => ({
  statusCode: 400,
  data: error,
})

export const unauthorized = (): HttpResponse<AppError> => ({
  statusCode: 401,
  data: new UnauthorizedError(),
})

export const forbidden = (): HttpResponse<AppError> => ({
  statusCode: 403,
  data: new ForbiddenError(),
})

export const notFound = (): HttpResponse<AppError> => ({
  statusCode: 404,
  data: new NotFoundError(),
})

export const conflictError = (type: string): HttpResponse<AppError> => ({
  statusCode: 409,
  data: new ConflictError(type),
})

export const serverError = (error: Error): HttpResponse<AppError> => ({
  statusCode: 500,
  data: new ServerError(error),
})

export const sendMailFailure = (): HttpResponse<AppError> => ({
  statusCode: 502,
  data: new SendMailError(),
})
