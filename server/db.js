import mongoose from "mongoose";

const db = async () => {
  await mongoose.connect("mongodb://localhost:27017/study");

  console.log("MongoDB connected");
};

export default db;