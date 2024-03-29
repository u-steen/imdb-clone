import dotenv from "dotenv";
dotenv.config();
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;

// Data
import {
  peopleData,
  genreData,
  contentTypeData,
  usersData,
  reviewData,
  contentData,
} from "./db_data.js";

// Postgres
// ES module syntax
import pgPromise from "pg-promise";
// Create an instance of pg-promise
const pgp = pgPromise();
const db = pgp(
  `postgres://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
);

const deleteTableData = async () => {
  const tableNames = await db.query(
    `SELECT table_name
    FROM information_schema.tables 
    WHERE table_schema = 'public' 
      AND table_type = 'BASE TABLE'`
  );
  console.log(tableNames);
  for (const table of tableNames) {
    try {
      await db.query(`
    TRUNCATE TABLE
      ${table.table_name}
    RESTART IDENTITY CASCADE;
  `);
    } catch (error) {
      console.error("[ERROR] Deleting data:", error);
    } finally {
      console.log(`${table.table_name} was truncated`);
    }
  }
};

const insertPeople = async () => {
  // People
  try {
    for (const person of peopleData) {
      await db.query(
        `
        INSERT INTO people (person_name, birth_date, description, person_media_path)
        VALUES ($1, $2, $3, $4);`,
        [
          person.personName,
          person.birthDate,
          person.description,
          "/src/imgs/people/" +
            person.personName
              .toLowerCase()
              .replaceAll(" ", "_")
              .replaceAll(".", ""),
        ]
      );
    }
  } catch (error) {
    console.log("[ERROR]", error);
  } finally {
    await db.query(`SELECT COUNT(*) from people`).then((result) => {
      console.log("People total count", result);
    });
  }
};

const insertGenres = async () => {
  try {
    for (const genre of genreData) {
      await db.query(
        `
        INSERT INTO genres (genre_name, description)
        VALUES ($1, $2);`,
        [genre.genreName, genre.description]
      );
    }
  } catch (error) {
    console.log("[ERROR]", error);
  } finally {
    const result = await db.query(`SELECT COUNT(*) FROM genres`);
    console.log("Total genres count:", result);
  }
};

const insertContentType = async () => {
  try {
    for (const contentType of contentTypeData) {
      await db.query(`
      INSERT INTO ctype (ctype_name)
      VALUES ('${contentType.ctype_name}');`);
    }
  } catch (error) {
    console.log("[ERROR]", error);
  } finally {
    const result = await db.query(`SELECT COUNT(*) FROM ctype`);
    console.log("Total ctype count", result);
  }
};

const insertUsers = async () => {
  const currentDate = new Date().toISOString().slice(0, 10);

  try {
    for (const user of usersData) {
      await db.query(
        `
      INSERT INTO users (username, email, created_at, birth_date, 
        password_hash, salt, bio, profile_picture_path)
      VALUES ($1, $2, CURRENT_DATE, TO_DATE($3, 'DD-MM-YYYY'), $4, $5, $6, $7)`,
        [
          user.username,
          user.email,
          user.birth_date,
          user.password_hash,
          user.salt,
          user.bio,
          "/src/imgs/users/" +
            user.username
              .toLowerCase()
              .replaceAll(" ", "_")
              .replaceAll(".", ""),
        ]
      );
    }
  } catch (error) {
    console.log("[ERROR]", error);
  } finally {
    const result = await db.query(`SELECT COUNT(*) FROM users`);
    console.log("Total users count", result);
  }
};

const insertReviews = async () => {
  try {
    for (const review of reviewData) {
      await db.query(
        `
        INSERT INTO reviews (username, content_id, review_text, rating)
        VALUES ($1, $2, $3, $4);`,
        [review.username, review.content_id, review.review_text, review.rating]
      );
    }
  } catch (error) {
    console.log("[ERROR]", error);
  } finally {
    const result = await db.query(`SELECT COUNT(*) FROM reviews`);
    console.log("Total reviews count", result);
  }
};

const insertContent = async () => {
  for (const content of contentData) {
    const {
      title,
      type_id,
      release_date,
      description,
      duration,
      trailer_url,
      rt_url,
    } = content;
    try {
      await db.query(
        `
        INSERT INTO content (title, type, release_date, description, duration, 
                              trailer_url, rt_url, media_dir_path)
        VALUES ($1, $2, TO_DATE($3, 'DD-MM-YYYY'), $4, $5, $6, $7, $8)`,
        [
          title,
          type_id,
          release_date,
          description,
          duration,
          trailer_url,
          rt_url,
          "/src/imgs/content/" +
            title.toLowerCase().replaceAll(" ", "_").replaceAll(".", ""),
        ]
      );
    } catch (error) {
      console.log("[ERROR]", error);
    } finally {
      const result = await db.query(`SELECT COUNT(*) FROM content`);
      console.log("Total content count", result);
    }
  }
};

const insertData = async () => {
  await deleteTableData();
  await insertPeople();
  await insertGenres();
  await insertContentType();
  await insertUsers();
  await insertContent();
  await insertReviews();
};

insertData();
