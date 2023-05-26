import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  modelID: { type: Schema.Types.ObjectId, ref: "Model", required: true },
  recruiterID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  rating: { type: Number, required: true },
  review: { type: String },
});

export const Review = mongoose.model("Reviews", ReviewSchema);
