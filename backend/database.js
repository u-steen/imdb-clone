require("dotenv").config();
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;

// Postgres
const pgp = require("pg-promise")();
const db = pgp(
  `postgres://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
);

const getMoviesQuery = `SELECT * FROM movies;`;

db.query(`create table test2 (id serial primary key, name varchar(200))`);

// Exiting the PGP
pgp.end();
