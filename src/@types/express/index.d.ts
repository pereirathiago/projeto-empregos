declare namespace Express {
  export interface Request {
    user: {
      id: string
      username: string
      role: 'user' | 'company'
    }
  }
}
