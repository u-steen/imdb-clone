import dotenv from "dotenv";
dotenv.config();
const dbName = process.env.DB_NAME;
const dbUsername = process.env.DB_USERNAME;
const dbPassword = process.env.DB_PASSWORD;
const dbPort = process.env.DB_PORT;
const dbHost = process.env.DB_HOST;

// Postgres
// ES module syntax
import pgPromise from "pg-promise";
// Create an instance of pg-promise
const pgp = pgPromise();
const db = pgp(
  `postgres://${dbUsername}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`
);

// Delete tables
const dropAllTables = async () => {
  try {
    // Get all table names in the public schema
    const tableNames = await db.query(
      `SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
        AND table_type = 'BASE TABLE'`
    );

    // Drop each table
    for (const table of tableNames) {
      await db.none(`DROP TABLE IF EXISTS "${table.table_name}" CASCADE`);
      console.log(`Dropped table: ${table.table_name}`);
    }

    console.log("All tables dropped successfully");
  } catch (error) {
    console.error("Error dropping tables:", error);
  }
};

const createAllTables = async () => {
  // Content Table
  try {
    // Content
    await db.query(`
    CREATE TABLE content (
      content_id SERIAL PRIMARY KEY,
      content_title VARCHAR(100),
      content_type VARCHAR(30),
      release_date DATE,
      description TEXT,
      duration VARCHAR(50),
      trailer_url VARCHAR(150),
      rt_url VARCHAR(150),
      media_dir_path VARCHAR(50)
    )`);
    // People
    await db.query(`
      CREATE TABLE people (
        person_id SERIAL PRIMARY KEY,
        person_name VARCHAR(100),
        person_media_path VARCHAR(50),
        birth_date DATE,
        description TEXT
      )`);
    // Genres
    await db.query(`
    CREATE TABLE genres (
      genre_id SERIAL PRIMARY KEY,
      genre_name VARCHAR(100),
      description TEXT
    )`);
    // Content Type
    await db.query(`
    CREATE TABLE content_type (
      content_type_id SERIAL PRIMARY KEY,
      content_type_name VARCHAR(100)
    )`);
    // Users
    await db.query(`
    CREATE TABLE users (
      user_id SERIAL PRIMARY KEY,
      username VARCHAR(20),
      created_at DATE,
      bio TEXT,
      profile_picture_path VARCHAR(100)
    )
    `);
    // Reviews
    await db.query(`
    CREATE TABLE reviews (
      review_id SERIAL PRIMARY KEY,
      user_id INT REFERENCES users(user_id),
      content_id INT REFERENCES content(content_id),
      review_text TEXT,
      rating INT
    )`);
    await db.query(`
    CREATE TABLE roles(
      role_id SERIAL PRIMARY KEY,
      role_name VARCHAR(50)
    )`);
    // Content People
    await db.query(`
      CREATE TABLE content_people (
        content_id INT REFERENCES content(content_id),
        person_id INT REFERENCES people(person_id),
        role_id INT REFERENCES roles(role_id)
      )`);
  } catch (error) {
    console.log("[ERROR]", error);
  } finally {
    const tableNames = await db.query(
      `SELECT table_name 
        FROM information_schema.tables 
        WHERE table_schema = 'public' 
          AND table_type = 'BASE TABLE'`
    );
    console.log(tableNames);
    pgp.end();
  }

  // Genres
};

const syncTables = async () => {
  await dropAllTables();
  await createAllTables();
};

syncTables();
