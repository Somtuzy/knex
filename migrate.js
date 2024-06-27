const knex = require('knex');
const knexConfig = require('./knexfile');

const environment = process.env.NODE_ENV;
const db = knex(knexConfig[environment]);

db.migrate.latest()
  .then(() => {
    console.log('Migrations are up to date..');
    process.exit(0);
  })
  .catch((err) => {
    console.error('Migration error:', err);
    process.exit(1);
  });