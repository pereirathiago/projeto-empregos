declare namespace Express {
  export interface Request {
    user: {
      id: string
      token: string
      username: string
      role: 'user' | 'company'
    }
  }
}
