import { AppError } from './app-error'

export class ServerError extends AppError {
  constructor(error?: Error) {
    super(error ? error.message : 'Internal server error', 500)
  }
}

export class UnauthorizedError extends AppError {
  constructor() {
    super('Unauthorized', 401)
  }
}

export class ForbiddenError extends AppError {
  constructor() {
    super('Access denied', 403)
  }
}

export class NotFoundError extends AppError {
  constructor() {
    super('Not found', 404)
  }
}

export class SendMailError extends AppError {
  constructor() {
    super('Error sending email', 502)
  }
}

export class ConflictError extends AppError {
  constructor(message: string) {
    super(message, 409)
  }
}
