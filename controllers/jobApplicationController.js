import { Model } from "../models/Models.js";
import { Recruiter } from "../models/Recruiters.js";
import { Jobs } from "../models/Jobs.js";
import { JobApplication } from "../models/JobApplicantion.js";
import { sendMail } from "../utils/email.js";

export const applyJob = async (req, res) => {
  const { jobID, modelID, recruiterID, applicationStatus, email } = req.body;

  try {
    const newJobApplication = new JobApplication({
      jobID: jobID,
      modelID: modelID,
      recruiterID: recruiterID,
      applicationStatus,
    });
    await newJobApplication.save();
    await sendMail(
      email,
      "Job Application",
      "Your application has been submitted"
    );

    const recruiter = await Recruiter.findById(recruiterID);
    await sendMail(
      recruiter.email,
      "Job Application",
      "You have a new application"
    );
    return res.status(200).json({ message: "Application submitted" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};
