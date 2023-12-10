import schema from "./schema.js";
import mongoose from "mongoose";

const model = mongoose.model("followUser", schema);

export default model;