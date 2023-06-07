import mongoose from "mongoose";

const JobApplcationSchema = new mongoose.Schema({
  jobID: { type: mongoose.Schema.Types.ObjectId, ref: "Jobs", required: true },
  modelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Model",
    required: true,
  },
  recruiterID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Recruiter",
    required: true,
  },
  applicationStatus: { type: String, required: true },
});

export const JobApplication = mongoose.model(
  "JobApplication",
  JobApplcationSchema
);
