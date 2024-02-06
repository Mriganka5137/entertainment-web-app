import mongoose from "mongoose";
let isConnected: boolean = false;

export const ConnectToDatabase = async () => {
  mongoose.set("strictQuery", true); // This is to prevent mongoose from returning a result if the query does not match any document in the database

  if (!process.env.MONGODB_URI) {
    return console.log("MONGODB_URL is not defined");
  }

  if (isConnected) {
    return console.log("Already connected to database");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "entertainment-app",
    });

    isConnected = true;
  } catch (error) {
    console.log("Error connecting to database");
  }
};
