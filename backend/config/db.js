import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { dbName: "Mono-King" });
    console.log("connected to database")
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
