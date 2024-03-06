import { Router } from "express";
import {
  getContentAll,
  getContentById,
  postContent,
  deleteContent,
} from "../db_queries.js";

const router = Router();

router.get("/content/:page?", async (req, res) => {
  let { page } = req.params;
  let { pageSize } = req.body;
  if (page === undefined) page = 1;
  if (pageSize === undefined) pageSize = 10;
  console.log(page, pageSize);

  if (page < 1 || pageSize < 1) {
    res.sendStatus(400);
    return;
  }

  const response = await getContentAll();
  const slicedResponse = response.slice((page - 1) * pageSize, page * pageSize);

  if (slicedResponse === undefined || slicedResponse.length === 0) {
    res.sendStatus(404);
    return;
  }
  res.send(slicedResponse);
});

router.get("/content/item/:item", async (req, res) => {
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
