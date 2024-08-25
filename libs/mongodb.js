import mongoose from "mongoose";
const connectMongoDB = async () => {
  if (mongoose.connection.readyState >= 1) return;
  try {
    // @ts-ignore
    mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connect ");
  } catch (error) {
    console.error(error);
  }
};

export default connectMongoDB;
