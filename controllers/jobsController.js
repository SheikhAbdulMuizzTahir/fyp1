import { Jobs } from "../models/Jobs.js";

export const createJob = async (req, res) => {
  try {
    console.log(req.body);

    const jobtitle = req.body.jobtitle;
    const jobDescription = req.body.jobDescription;
    const recruiterID = req.body.recruiterID;
    const paymentInfo = req.body.paymentInfo;
    const gender = req.body.gender;
    const height = String(req.body.height).split("-")[0];
    const weight = String(req.body.weight).split("-")[0];
    const hairColor = req.body.hairColor;
    const eyeColor = req.body.eyeColor;
    const waist = req.body.waist;
    const dressSize = req.body.dressSize;
    const shoeSize = req.body.shoeSize;
    const ethnicity = req.body.ethnicity;
    const nationality = req.body.nationality;
    const bodyType = req.body.bodyType;


    //console.log(name,email,password);
    const newJob = new Jobs({
      jobtitle,
      jobDescription,
      recruiterID,
      paymentInfo,
      gender,
      height,
      weight,
      hairColor,
      eyeColor,
      waist,
      dressSize,
      shoeSize,
      ethnicity,
      nationality,
      bodyType,
    });
    newJob
      .save()
      .then(() => res.json("Registered"))
      .catch((err) => res.status(400).json("Error" + err));
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const updateJob = async (req, res) => {
  Jobs.findById(req.params.id)
    .then((Job) => {
      Job.jobtitle = req.body.jobtitle;
      Job.jobDescription = req.body.jobDescription;
      Job.recruiterID = req.body.recruiterID;
      Job.paymentInfo = req.body.paymentInfo;
      Job.gender = req.body.gender;
      Job.height = req.body.height;
      Job.weight = req.body.weight;
      Job.hairColor = req.body.hairColor;
      Job.eyeColor = req.body.eyeColor;
      Job.waist = req.body.waist;
      Job.dressSize = req.body.dressSize;
      Job.shoeSize = req.body.shoeSize;
      Job.ethnicity = req.body.ethnicity;
      Job.nationality = req.body.nationality;
      Job.bodyType = req.body.bodyType;

      Job.save()
        .then(() => res.json("Job Updated"))
        .catch((err) => res.status(400).json("Error" + err));
    })
    .catch((err) => res.status(400).json("Error" + err));
};

export const getAllJobs = async (req, res) => {
  Jobs.find()
    .then((Job) => res.json(Job))
    .catch((err) => res.status(400).json("Error: " + err));
};

export const getJobById = async (req, res) => {
  Jobs.findById(req.param.id)
    .then((Job) => res.json(Job))
    .catch((err) => res.status(400).json("Error" + err));
};

export const deleteJob = async (req, res) => {
  try {
    console.log(req.params);
    await Jobs.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Job deleted successfully" });
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const searchJobs = async (req, res) => {
  Jobs.find({
    gender: req.body.gender,
    paymentInfo: { $in: req.body.paymentInfo },
    birthdate: { $gt: req.body.lowerage, $lt: req.body.upperage },
    height: { $gt: req.body.heightgt, $lt: req.body.heightlt },
    weight: { $gt: req.body.weightgt, $lt: req.body.weightlt },
    hairColor: { $in: req.body.hairColor },
    eyeColor: { $in: req.body.eyeColor },
    waist: { $gt: req.body.waisttgt, $lt: req.body.waistlt },
    dressSize: { $gt: req.body.dressSizegt, $lt: req.body.dressSizelt },
    shoeSize: { $gt: req.body.shoeSizegt, $lt: req.body.shoeSizelt },
    experiece: { $gt: req.body.experiencegt, $lt: req.body.experiecelt },
    ethnicity: { $in: req.body.ethnicity },
    nationality: { $in: req.body.nationality },
    bodyType: { $in: req.body.bodyType },
  })
    .then((Job) => res.json(Job))
    .catch((err) => res.status(400).json("Err" + err));
};
