const { Client } = require('pg');
require('dotenv').config()

const client = new Client({
  host: process.env.DB_HOSTNAME,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

client.connect();

exports.query = async (query, params) => {
  const { rows } = await client.query(query, params);
  return rows;
};
