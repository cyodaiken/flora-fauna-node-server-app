import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    post: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "observation",
    },
    like: {
      type: Boolean,
      default: false,
    },
  },

  { collection: "userLikesPost" }
);
export default schema;
