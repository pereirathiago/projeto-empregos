interface ICreateUserSessionDTO {
  user_id: number
  token: string
  expires_at: Date
}

interface IAuthenticateUserDTO {
  username: string
  password: string
}

export { IAuthenticateUserDTO, ICreateUserSessionDTO }
