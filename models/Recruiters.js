const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecruiterSchema = new Schema({
  
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String },
  birthdate: { type: Date },
  location: { type: String },
  bio: { type: String },
  phone: { type: String },
  companyName: { type: String },
  website: { type: String },
  location: { type: String },
  bio: { type: String },
  phone: { type: String },
   socialLinks: {
      facebook: { type: String },
      instagram: { type: String },
      twitter: { type: String },
      linkedin: { type: String },
    }


});

const Recruiter = mongoose.model('Recruiter',RecruiterSchema);
module.exports = Recruiterl;