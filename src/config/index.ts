import 'dotenv/config'

interface Config {
  server: {
    port: number
    nodeEnv: 'development'
    isDevelopment: boolean
  }
  database: {
    host: string
    port: number
    name: string
    user: string
    password: string
  }
  auth: {
    secret_token: string
    expires_in_token: string
  }
}

function getEnvVar(key: string): any {
  const value = process.env[key]

  if (!value) {
    throw new Error(`Variavel de ambiente ${key} não está definidada.`)
  }

  return value
}

const serverConfig: Config['server'] = {
  port: getEnvVar('PORT'),
  nodeEnv: (getEnvVar('NODE_ENV') as Config['server']['nodeEnv']) || 'development',
  isDevelopment: getEnvVar('NODE_ENV') === 'development',
}

const databaseConfig: Config['database'] = {
  host: getEnvVar('DB_HOST'),
  port: getEnvVar('DB_PORT'),
  name: getEnvVar('DB_NAME'),
  user: getEnvVar('DB_USER'),
  password: getEnvVar('DB_PASSWORD'),
}

const authConfig: Config['auth'] = {
  secret_token: getEnvVar('JWT_SECRET_TOKEN'),
  expires_in_token: getEnvVar('JWT_EXPIRES_IN') || '480m'
}

const config: Config = {
  server: serverConfig,
  database: databaseConfig,
  auth: authConfig,
}

export { config }
