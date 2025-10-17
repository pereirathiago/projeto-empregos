import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.string('username').notNullable().unique()
    table.string('password').notNullable()
    table.string('email').nullable()
    table.string('phone').nullable()
    table.string('role').checkIn(['user', 'company']).notNullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('users')
}
