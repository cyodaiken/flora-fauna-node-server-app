import schema from "./schema.js";

const model = mongoose.model("followUser", schema);

export default model;