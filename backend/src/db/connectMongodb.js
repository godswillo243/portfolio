import mongoose from "mongoose";
import env from "../config/env.js";

const connectMongodb = async () => {
  try {
    await mongoose.connect(env.DB_URL);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectMongodb;
export const closeMongodb = async () => {
  try {
    await mongoose.connection.close();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  }
};
