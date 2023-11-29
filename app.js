import express from "express";
// import mongodb from "mongoose";
// mongodb.connect("mongodb://localhost:27017/project");
import userRoutes from "./user/routes.js";
import cors from "cors";

const app = express();
// app.use(express.json()); // for parsing application/json
app.use(cors());
userRoutes(app);

app.listen(400);
