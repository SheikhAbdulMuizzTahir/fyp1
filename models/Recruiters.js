import mongoose from "mongoose";
const Schema = mongoose.Schema;

const RecruiterSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  category: { type: String },
  bio: { type: String },
  companyName: { type: String },
  website: { type: String },
  location: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  linkedin: { type: String },
  rating: { type: Number },
});

export const Recruiter = mongoose.model("Recruiter", RecruiterSchema);
