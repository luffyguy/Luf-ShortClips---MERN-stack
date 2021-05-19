import express from "express";
import mongoose from "mongoose";
import Cors from "cors";

import Data from "./data.js";
import Clips from "./models/dbModel.js";

//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(Cors());

//db config
const connection_url =
  "mongodb+srv://admin:harshh123@cluster0.yi0ho.mongodb.net/Luff-ShortClips?retryWrites=true&w=majority";

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

//api endpoints
app.get("/", (req, res) => res.status(200).send("Luff-ShortClips Working"));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));
app.post("/v2/posts", (req, res) => {
  const dbClips = req.body;

  Clips.create(dbClips, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.get("/v2/posts", (req, res) => {
  Clips.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//listner
app.listen(port, () => console.log(`listening on localhost: ${port}`));
