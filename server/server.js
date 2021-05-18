import express from "express";
import mongoose from "mongoose";

//app config
const app = express();
const port = process.env.PORT || 9000;

//middleware

//db config

//api endpoints
app.get("/", (req, res) => res.status(200).send("Luff-ShortClips Working"));

//listner
app.listen(port, () => console.log(`listening on localhost: ${port}`));