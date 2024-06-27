/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const {
  DB_HOST: host,
  DB_USER: user,
  DB_PORT: port,
  DB_PASSWORD: password,
  DB_NAME: database
} = require('./src/env.config')

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host,
      user,
      port,
      password,
      database
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './src/migrations',
      tableName: 'knex_migrations'
    }
  }
};
