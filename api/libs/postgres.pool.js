const { Pool } = require('pg');

const { config } = require('../config/config')

const USER = encodeURIComponent(config.dbHost);
const PASSWORD = encodeURIComponent(config.password);
const URI = `postgress://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const pool = new Pool({ connectionString: URI });


module.exports = pool;
