import { Model } from "../models/Models.js";
import { Recruiter } from "../models/Recruiters.js";
import { Jobs } from "../models/Jobs.js";
import { JobApplication } from "../models/JobApplicantion.js";
import { sendMail, sendMailWithHtmlBody } from "../utils/email.js";

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
    const models = await Model.findById(modelID);

    await sendMailWithHtmlBody(
      email,
      "Job Application",
      `<h1>Dear ${models.name},</h1>
      <p>You have applied for a job. Please wait for the recruiter to contact you.</p>
      <p>Thank you</p>
      <p>Team Vogue Splash</p>`

    );

    const recruiter = await Recruiter.findById(recruiterID);
    await sendMailWithHtmlBody(
      recruiter.email,
      "Job Application",
      await getModelDetailsHtml(models)
    );
    return res.status(200).json({ message: "Application submitted" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: error });
  }
};

const getModelDetailsHtml = async (model) => {
  return `<p>Details of the model:</p>
    <img style="width: 200px; height: 200px" src="${model.profilePic}" alt="${model.name}"></img>
    <p style="font-weight: 900">Name: <span style="font-weight: 400">${model.name}</span></p>
    <p style="font-weight: 900">Email: <span style="font-weight: 400">${model.email}</span></p>
    <p style="font-weight: 900">Gender: <span style="font-weight: 400">${model.gender}</span></p>
    <p style="font-weight: 900">Height: <span style="font-weight: 400">${model.height}</span></p>
    <p style="font-weight: 900">Weight: <span style="font-weight: 400">${model.weight}</span></p>
    <p style="font-weight: 900">Hair Color: <span style="font-weight: 400">${model.hairColor}</span></p>
    <p style="font-weight: 900">Eye Color: <span style="font-weight: 400">${model.eyeColor}</span></p>
    <p style="font-weight: 900">Waist: <span style="font-weight: 400">${model.waist}</span></p>
    <p style="font-weight: 900">Dress Size: <span style="font-weight: 400">${model.dressSize}</span></p>
    <p style="font-weight: 900">Shoe Size: <span style="font-weight: 400">${model.shoeSize}</span></p>
    <p style="font-weight: 900">Country: <span style="font-weight: 400">${model.nationality}</span></p>
    <p style="font-weight: 900">Ethnicity: <span style="font-weight: 400">${model.ethnicity}</span></p>
    <p style="font-weight: 900">Facebook Link: <span style="font-weight: 400">${model.facebook}</span></p>
    <p style="font-weight: 900">Instagram Link: <span style="font-weight: 400">${model.instagram}</span></p>
    <p style="font-weight: 900">Twitter Link: <span style="font-weight: 400">${model.twitter}</span></p>
    <p style="font-weight: 900">LinkedIn Link: <span style="font-weight: 400">${model.linkedin}</span></p>
    <p style="font-weight: 900">Category: <span style="font-weight: 400">${model.category}</span></p>
    <p>Thank you</p>
    <p>Team Vogue Splash</p>`;

};
