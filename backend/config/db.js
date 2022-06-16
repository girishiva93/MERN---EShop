import mongoose from "mongoose";
import colors from "colors";

// yo function le env ko file lai extract garera connect gare rakheko xa backend sanga

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error.${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
