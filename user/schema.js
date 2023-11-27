// setting constraints for our data for users.

import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    user_id: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    name: { type: String },
    role: {
      type: String,
      enum: ["ADMIN", "USER", "MODERATOR"],
      default: "USER",
    },
    created_at: { type: Date, default: Date.now },
    family_name: { type: String },
    updated_at: { type: Date, default: Date.now },
    last_login: { type: Date, default: Date.now },
    logins_count: { type: Number, default: 0 },
    profile_pic: { type: String },
    email_verified: { type: Boolean, default: false },
  },
  { collection: "users" }
); // where we want to store. we created a collection so we specify store in user.

export default schema;
