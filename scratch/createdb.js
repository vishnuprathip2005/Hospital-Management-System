const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  password: 'prathip',
  port: 5432,
  database: 'postgres', // Connect to default DB
});

client.connect()
  .then(() => client.query('CREATE DATABASE hospital_management'))
  .then(() => {
    console.log('Database created successfully');
    client.end();
  })
  .catch((err) => {
    console.error('Error creating database:', err.message);
    client.end();
  });
