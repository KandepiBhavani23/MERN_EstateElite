import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: ["UserName is required", true],
      unique: true,
    },
    email: {
      type: String,
      require: ["Email is required", true],
      unique: true,
    },
    password: {
      type: String,
      require: ["Password is required", true],
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", UserSchema);
