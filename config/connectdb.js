import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.ATLAS_URI || "mongodb://127.0.0.1:27017",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
  } catch (err) {
    console.error(err);
  }
};

mongoose.connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});
