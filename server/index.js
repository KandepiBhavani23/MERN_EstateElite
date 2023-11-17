import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

export const app = express();
dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
