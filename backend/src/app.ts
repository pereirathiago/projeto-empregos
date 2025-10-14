import cors from 'cors'
import express from 'express'
import 'reflect-metadata'
import './container'
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

export default app
