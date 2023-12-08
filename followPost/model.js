import schema from "./schema.js";
import mongoose from "mongoose";

const model = mongoose.model("followPost", schema);

export default model;
