// Express
import express from "express";
import ContentRouter from "./routes/content.js";
import AuthRouter from "./routes/auth.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded());

app.use(ContentRouter);
app.use(AuthRouter);

const PORT = 7001;
app.listen(PORT, () => {
  console.log(`Running Express server on port ${PORT}`);
});
