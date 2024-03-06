import { Router } from "express";
import {
  getContentAll,
  getContentById,
  postContent,
  deleteContent,
} from "../db_queries.js";

const router = Router();

router.get("/content", async (req, res) => {
  const response = await getContentAll();
  res.send(response);
});

router.get("/content/:item", async (req, res) => {
  const { item } = req.params;
  const foundItem = await getContentById(item);
  if (foundItem) res.send(foundItem);
  else res.sendStatus(404);
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

router.delete("/content/:itemID", async (req, res) => {
  const { itemID } = req.params;
  const foundItem = await getContentById(itemID);
  if (foundItem) {
    console.log("Deleting item with ID", itemID);
    await deleteContent(itemID);
    res.sendStatus(200);
  } else res.sendStatus(404);
});

export default router;
