import { Router } from "express";
import { getContentAll, getContentById } from "../db_queries.js";

const router = Router();

router.get("/content", async (req, res) => {
  const response = await getContentAll();
  res.send(response);
});

router.get("/content/:item", async (req, res) => {
  const { item } = req.params;
  const foundItem = await getContentById(item);
  res.send(foundItem);
});

export default router;
