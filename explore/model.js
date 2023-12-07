import schema from "./schema.js";
import mongoose from "mongoose";

const model = mongoose.model("observation", schema);
export default model;