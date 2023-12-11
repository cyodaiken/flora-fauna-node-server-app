import schema from "./schema.js";
import mongoose from "mongoose";

const model = mongoose.model("userLikesPost", schema);

export default model;
