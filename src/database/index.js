const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'randompassword',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, params) => {
  const { rows } = await client.query(query, params);
  return rows;
};
