interface IRegisterUserDTO {
  name: string
  username: string
  email?: string | null
  phone?: string | null
  password: string
  role: 'user' | 'company'
}

export { IRegisterUserDTO }
