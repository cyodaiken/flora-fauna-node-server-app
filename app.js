import express from "express";
import mongodb from "mongoose";
import userRoutes from "./user/routes.js";
// mongodb.connect("mongodb://localhost:27017/project");

const app = express();
app.use(express.json()); // for parsing application/json

userRoutes(app);

app.listen(400);
