import { createHash, randomBytes } from "node:crypto";
import { Router } from "express";
import { registerUser, getUser } from "../db_queries.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const router = Router();

const jwt_secret = process.env.JWT_SECRET;

const maxAge = 3 * 24 * 60 * 60; // 3 days (in seconds)
const createToken = (username) => {
  return jwt.sign({ username }, jwt_secret, {
    expiresIn: maxAge,
  });
};

router.get("/user/:username", async (req, res) => {
  const { username } = req.params;
  const user = await getUser(username);
  if (!user) {
    res.sendStatus(404);
    return;
  }
  res.send(user);
});

router.post("/auth/register", async (req, res) => {
  const { username, email, password, birth_date, bio } = req.body;
  if (!(username && email && password)) {
    res.sendStatus(400);
    return;
  }
  const foundUser = await getUser(username);
  if (foundUser) {
    res.sendStatus(409);
    return;
  }
  const hashAlg = createHash("sha256");
  const salt = randomBytes(4).toString("hex");
  const saltedPass = password + salt;
  hashAlg.update(saltedPass);
  const password_hash = hashAlg.digest("hex");
  registerUser({ username, email, birth_date, password_hash, salt, bio });

  const token = createToken(username);
  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: maxAge * 1000,
    sameSite: "none",
  });
  res.status(201).json({ username });
});

router.post("/auth/login", async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.sendStatus(404);
  }
  const foundUser = await getUser(username);
  if (!foundUser) {
    res.send(401);
    return;
  }
  const hashAlg = createHash("sha256");
  const saltedPass = password + foundUser[0].salt;
  hashAlg.update(saltedPass);
  const providedHashedPass = hashAlg.digest("hex");
  if (providedHashedPass === foundUser[0].password_hash) {
    res.sendStatus(200);
    // Aici suntem logati
    return;
  }

  res.sendStatus(401);
  // console.log("Provided pass afteer hash\t", providedHashedPass);
  // console.log("Passowrd from db\t\t", foundUser[0].password_hash);
});
// TODO: Delete user
// TODO: Modify user data

export default router;
