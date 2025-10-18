interface IJobSeeker {
  id: number
  user_id: number
  experience?: string | null
  education?: string | null
  created_at: Date
  updated_at: Date
}

interface IUserJobSeeker {
  name: string
  username: string
  email?: string
  phone?: string
  experience?: string
  education?: string
}

export { IJobSeeker, IUserJobSeeker }
