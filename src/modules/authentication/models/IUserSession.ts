interface IUserSession {
  id: number
  user_id: number
  token: string
  expires_at: Date
  created_at: Date
  updated_at: Date
}

export { IUserSession }
