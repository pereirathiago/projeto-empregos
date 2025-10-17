import { AppError } from '@errors/app-error'
import { ValidationError } from '@errors/http'
import '@shared/container'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import routes from './routes'

const app = express()

const allowedOrigins = '*'

const options: cors.CorsOptions = {
  origin: allowedOrigins,
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
}

app.use(cors(options))

app.use(express.json())

app.use(routes)

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if (err instanceof ValidationError) {
    return response.status(err.statusCode).json({
      message: err.message,
      code: 'UNPROCESSABLE',
      details: err.details,
    })
  }

  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      message: err.message,
    })
  }
  return response.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  })
})

export default app
