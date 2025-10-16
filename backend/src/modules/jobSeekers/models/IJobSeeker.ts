interface IJobSeeker {
  id: number
  user_id: number
  experience?: string | null
  education?: string | null
  created_at: Date
  updated_at: Date
}

export { IJobSeeker }
