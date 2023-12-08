// setting constraints for our data for users.

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    follower: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
    followed: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "observation",
    },
  },

  { collection: "followPost" }
);
export default schema;
