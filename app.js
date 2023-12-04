import express from "express";
// import mongodb from "mongoose";
// mongodb.connect("mongodb://localhost:27017/project");
import userRoutes from "./user/routes.js";
import cors from "cors";
import mongoose from "mongoose";
// import "dotenv/config";   Loading env variables from .env file

const DB_CONNECTION_STRING =
  "mongodb+srv://user-jae:jae123@cluster-myecologist.vnj6wrp.mongodb.net/flora-fauna?retryWrites=true&w=majority";

mongoose
  .connect(DB_CONNECTION_STRING, {
    newUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    console.log("CONNECTED URL" + DB_CONNECTION_STRING);
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json()); // for parsing application/json

userRoutes(app);

app.listen(400);
