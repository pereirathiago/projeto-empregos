import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('job_seekers', (table) => {
    table.increments('id').primary()
    table.integer('user_id').unsigned().notNullable().unique()
    table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    table.text('experience').nullable()
    table.text('education').nullable()
    table.timestamps(true, true)
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('job_seekers')
}
