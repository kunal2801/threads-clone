import mongoose from "mongoose";

let isConnected = false; //variable to check if connection is established or not
export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGODB_URI)
    return console.log("MONGODB_URI not found in .env file");
  if (isConnected) return console.log("Already connected to DB");

  try {
    await mongoose.connect(process.env.MONGODB_URI);
    isConnected = true;
    console.log("Connected to DB");
  } catch (err) {
    console.log("Error connecting to DB", err);
  }
};
