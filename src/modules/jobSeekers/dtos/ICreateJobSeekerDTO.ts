interface ICreateJobSeekerUserDTO {
  name: string
  username: string
  password: string
  phone?: string
  email?: string
  experience?: string
  education?: string
}

interface ICreateJobSeekerDTO {
  user_id: number
  experience?: string
  education?: string
}

export { ICreateJobSeekerDTO, ICreateJobSeekerUserDTO }
