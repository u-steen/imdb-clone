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
export default router;
