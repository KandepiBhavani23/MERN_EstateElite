import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    const connectserver = await mongoose.connect(process.env.MONGODB_URL);
    console.log(
      `\n MONGODB Connected !!. DB Host : ${connectserver.connection.host}`
    );
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
    process.exit(1);
  }
};

export default connectDB;
