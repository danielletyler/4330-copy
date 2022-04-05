import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

//allows access to .env --> needed for secure deployment
import dotenv from "dotenv";

import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

const app = express();

//allows access to .env --> needed for secure deployment (has connection url)
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
app.use("/user", userRoutes);

//for deployment
app.get("/", (req, res) => {
  res.send("Hello to API");
});

const PORT = process.env.PORT || 8000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
