import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_sessions', (table) => {
    table.increments('id').primary()
    table.integer('user_id').notNullable().unsigned()
    table.text('token').notNullable()
    table.timestamp('expires_at').notNullable()
    table.timestamps(true, true)

    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    table.index('token')
    table.index('user_id')
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('user_sessions')
}
