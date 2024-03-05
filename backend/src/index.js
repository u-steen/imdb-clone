// Express
import express from "express";
import ContentRouter from "./routes/content.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(ContentRouter);

const PORT = 7001;
app.listen(PORT, () => {
  console.log(`Running Express server on port ${PORT}`);
});
