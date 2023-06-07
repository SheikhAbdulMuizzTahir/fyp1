import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  phoneno: { type: String },
  gender: { type: String },
  birthdate: { type: Date },
  profilePic: { type: String },
  height: { type: Number },
  weight: { type: Number },
  hairColor: { type: String },
  eyeColor: { type: String },
  waist: { type: Number },
  dressSize: { type: String },
  shoeSize: { type: Number },
  experience: { type: String },
  ethnicity: { type: String },
  nationality: { type: String },
  gallery: { type: [String] },
  bodyType: { type: String },
  facebook: { type: String },
  instagram: { type: String },
  twitter: { type: String },
  linkedin: { type: String },
  rating: { type: Number },
  category: { type: String },
});
///body tpe remove dec
export const Model = mongoose.model("Model", ModelSchema);
