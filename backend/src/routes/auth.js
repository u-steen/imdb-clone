import { createHash, randomBytes } from "node:crypto";
import { Router } from "express";
import { registerUser, loginUser, getUser } from "../db_queries.js";

const router = Router();

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
  res.sendStatus(200);
});
// TODO: Delete user
// TODO: Modify user data

export default router;
