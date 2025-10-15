interface IUser {
  id: number
  name: string
  username: string
  email?: string | null
  phone?: string | null
  password: string
  role: 'user' | 'company'
  created_at: Date
  updated_at: Date
}

export { IUser }
