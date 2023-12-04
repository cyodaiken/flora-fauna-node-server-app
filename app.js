import express from "express";
// import mongodb from "mongoose";
// mongodb.connect("mongodb://localhost:27017/project");
import userRoutes from "./user/routes.js";
import cors from "cors";
import oberveDetailRoute from "./observation/routes.js";
import exploreRoutes from "./explore/routes.js";

const app = express();
// app.use(express.json()); // for parsing application/json
app.use(cors());
userRoutes(app);
exploreRoutes(app);
oberveDetailRoute(app);

app.listen(400);
