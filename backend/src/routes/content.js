import { Router } from "express";
import { getContentAll, getContentById, postContent } from "../db_queries.js";

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

router.post("/content", async (req, res) => {
  const itemToPost = req.body;
  let {
    title,
    type,
    release_date,
    description,
    duration,
    trailer_url,
    rt_url,
  } = itemToPost;
  if (!release_date) itemToPost.release_date = "01-01-0001";
  if (!trailer_url) itemToPost.trailer_url = "N/A";
  if (!rt_url) itemToPost.rt_url = "N/A";

  if (title && type && description && duration) {
    console.log(itemToPost);
    await postContent(itemToPost);
    res.sendStatus(201);
  } else res.sendStatus(400);
});

export default router;
