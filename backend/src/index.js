// Express
import express from "express";
import cors from "cors";
import ContentRouter from "./routes/content.js";
import AuthRouter from "./routes/auth.js";

const app = express();

// Requests will only be accepted from these origins
const allowedOrigins = ["http://localhost:7000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded());

app.use(ContentRouter);
app.use(AuthRouter);

const PORT = 7001;
app.listen(PORT, () => {
  console.log(`Running Express server on port ${PORT}`);
});
