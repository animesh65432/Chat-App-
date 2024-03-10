import mongoose from "mongoose";

const connecttomonogodb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("connect to monogdb");
  } catch (errors) {
    console.log(errors);
  }
};

export default connecttomonogodb;
