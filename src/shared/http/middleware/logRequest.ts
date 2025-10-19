import { NextFunction, Request, Response } from 'express'

const logRequest = (req: Request, res: Response, next: NextFunction) => {
  console.log(`REQUEST - ${req.method} ${req.url} - ${req.body ? JSON.stringify(req.body) : 'no body'}`)
  next()
}

export { logRequest }
