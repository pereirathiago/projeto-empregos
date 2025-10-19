import { NextFunction, Request, Response } from 'express'

const logResponse = (req: Request, res: Response, next: NextFunction) => {
  const originalSend = res.send.bind(res)

  let responseBody: any

  res.send = (body: any): Response => {
    responseBody = body
    return originalSend(body)
  }

  res.on('finish', () => {
    let bodyToLog: string

    if (typeof responseBody === 'object') {
      bodyToLog = JSON.stringify(responseBody)
    } else if (responseBody) {
      bodyToLog = responseBody.toString()
    } else {
      bodyToLog = '[No Body]'
    }

    if (bodyToLog.length > 300) {
      bodyToLog = bodyToLog.substring(0, 300) + '... [truncated]'
    }

    console.log(`RESPONSE - ${req.method} ${req.url} - ${res.statusCode} - Body: ${bodyToLog}`)
  })

  next()
}

export { logResponse }
