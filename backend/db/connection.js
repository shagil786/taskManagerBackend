import mongoose from "mongoose";

const connection = async () => {
  try {
    console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DB Server");
  } catch (error) {
    console.log("Error while connecting", error.message);
  }
};

export default connection;
