const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5332,
  user: 'root',
  password: '1234',
  database: 'mycontacts',
});

client.connect();

exports.query = async (query, params) => {
  const { rows } = await client.query(query, params);
  return rows;
};
