// setting constraints for our data for users.

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    user_id: { type: Number, unique: true, required: true },
    user_login: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    user_name: { type: String },
    user_role: {
      type: String,
      enum: ["admin", "user", "moderator"],
      default: "user",
    },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    last_login: { type: Date, default: Date.now },
    logins_count: { type: Number, default: 0 },
    profile_pic: { type: String },
    email_verified: { type: Boolean, default: false },
  },
  { collection: "users" }
); // where we want to store. we created a collection so we specify store in user.

export default schema;
