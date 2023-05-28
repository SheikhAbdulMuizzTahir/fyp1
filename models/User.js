import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  userId: {
    type: ObjectId,
    required: true,
  },
});

export const User = mongoose.model("User", userSchema);
