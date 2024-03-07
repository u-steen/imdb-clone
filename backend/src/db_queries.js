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
  return response[0];
};

export const postContent = async (objectToPost) => {
  const {
    title,
    type,
    release_date,
    description,
    duration,
    trailer_url,
    rt_url,
  } = objectToPost;
  console.log(objectToPost);
  await db.query(
    `INSERT INTO content(title, type, release_date, description, duration, 
                        trailer_url, rt_url, media_dir_path)
    VALUES($1, $2, TO_DATE($3, 'DD-MM-YYYY'), $4, $5, $6, $7, $8)`,
    [
      title,
      type,
      release_date,
      description,
      duration,
      trailer_url,
      rt_url,
      "/src/imgs/content/" +
        title.toLowerCase().replaceAll(" ", "_").replaceAll(".", ""),
    ]
  );
  return;
};

export const deleteContent = async (itemID) => {
  await db.query(`DELETE FROM content WHERE content_id = $1`, [+itemID]);
};
// Get User

export const getUser = async (username) => {
  const user = await db.query(`SELECT * FROM users WHERE username = $1`, [
    username,
  ]);
  if (user.length === 0) return null;
  return user;
};
