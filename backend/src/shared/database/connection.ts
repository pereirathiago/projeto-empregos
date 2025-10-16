import { config } from '@config/index'
import knex, { Knex } from 'knex'

const dbConfig: Knex.Config = {
  client: 'postgresql',
  connection: {
    host: config.database.host,
    port: Number(config.database.port),
    database: config.database.name,
    user: config.database.user,
    password: config.database.password,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    directory: './migrations',
    tableName: 'knex_migrations',
    extension: 'ts',
  },
  seeds: {
    directory: './seeds',
    extension: 'ts',
  },
}

export const db = knex(dbConfig)
