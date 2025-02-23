import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connection = async () => {
  try {
    await mongoose
      .connect(process.env.DATABASE_URL)
      .then(() => {
        console.log("Connected to MongoDB");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (error) {
    console.log(error);
  }
};

export default connection;
