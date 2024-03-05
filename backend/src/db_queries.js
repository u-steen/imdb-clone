import pgPromise from "pg-promise";
const pgp = pgPromise({});
import dotenv from "dotenv";
dotenv.config();
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const databaseName = process.env.DB_NAME;
const port = process.env.DB_PORT;
// console.log(username, password, databaseName, port);
const db = pgp(
  `postgres://${username}:${password}@localhost:${port}/${databaseName}`
);

export const getContentAll = async () => {
  const response = await db.query(`SELECT * FROM content`);
  return response;
};

export const getContentById = async (id) => {
  const response = await db.query(
    `SELECT * FROM content WHERE content_id = $1`,
    [+id]
  );
  return response;
};
