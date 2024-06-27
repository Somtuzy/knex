const knex = require('knex');
const { NODE_ENV } = require('./env.config');
const knexConfig = require('../knexfile');

const environment = NODE_ENV
const db = knex(knexConfig[environment]);

const startdb = async () => {
    try {
        await db.raw('CREATE DATABASE IF NOT EXISTS Tester');

        console.log('Database created or already exists.');
        if (environment === 'development') {
            await db.migrate.latest();
            console.log('Migrations are up to date FT Development');
        }
    } catch (err) {
        console.error('Error initializing database:', err);
    }
};

module.exports = { db, startdb };