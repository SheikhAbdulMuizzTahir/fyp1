import mongoose from "mongoose";
const Schema = mongoose.Schema;

const JobsSchema = new Schema({
  jobtitle: { type: String, required: true },
  jobDescription: { type: String, required: true },
  recruiterID: { type: Schema.Types.ObjectId, ref: "User", required: true },
  gender: { type: String },
  paymentInfo: { type: String },
  height: { type: Number },
  weight: { type: Number },
  hairColor: { type: String },
  eyeColor: { type: String },
  waist: { type: Number },
  dressSize: { type: Number },
  shoeSize: { type: Number },
  experience: { type: String },
  ethnicity: { type: String },
  nationality: { type: String },
  bodyType: { type: String },
  validTill: { type: Date },
  fromCountry: { type: String },
});

export const Jobs = mongoose.model("Jobs", JobsSchema);
