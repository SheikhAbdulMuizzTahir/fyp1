import { Model } from "../models/Models.js";
import { Recruiter } from "../models/Recruiters.js";
import bcrypt from "bcrypt";

export const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const model = await Model.findOne({ email }).exec();

    if (model) {
      const isPasswordCorrect = await bcrypt.compare(password, model.password);
      if (!isPasswordCorrect) {
        return res.status(400).json("Invalid credentials");
      }
      console.log("Login Successful");
      return res.status(200).json({ ...model, type: "Model" });
    } else {
      const recruiter = await Recruiter.findOne({ email }).exec();
      if (!recruiter) {
        return res.status(400).json("Invalid credentials");
      }
      const isPasswordCorrect = await bcrypt.compare(
        password,
        recruiter.password
      );
      if (!isPasswordCorrect) {
        return res.status(400).json("Invalid credentials");
      }
      return res.status(200).json({ ...recruiter, type: "Recruiter" });
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const handleRegister = async (req, res) => {
  const { userType } = req.body;
  // console.log(userType);

  try {
    if (userType === "Model") {
      const {
        email,
        password,
        confirmPassword,
        whoru,
        fName,
        lName,
        dob,
        height,
        weight,
        waist,
        gender,
        country,
        ethnicity,
        hairColor,
        eyeColor,
        bodyType,
        dressSize,
        experience,
        instaUsername,
        facebookUsername,
        twitterUsername,
      } = req.body;

      const model = await Model.findOne({ email: email }).exec();
      if (model) {
        return res.status(400).json("User already exists");
      }
      if (String(password) !== String(confirmPassword)) {
        return res.status(400).json("Passwords don't match");
      }
      const hashedPassword = await bcrypt.hash(password, 12);

      const newModel = await new Model({
        email,
        password: hashedPassword,
        name: fName + " " + lName,
        birthdate: new Date(dob),
        height,
        weight,
        waist,
        gender,
        nationality: country,
        ethnicity,
        hairColor,
        eyeColor,
        bodyType,
        dressSize,
        experience,
        instagram: instaUsername,
        facebook: facebookUsername,
        twitter: twitterUsername,
        category: whoru,
      });

      await newModel.save();
      res.status(200).send({ ...newModel, type: "Model" });
    } else {
      const {
        email,
        password,
        confirmPassword,
        whoru,
        fName,
        lName,
        dob,
        height,
        weight,
        waist,
        gender,
        country,
        ethnicity,
        hairColor,
        eyeColor,
        bodyType,
        dressSize,
        experience,
        instaUsername,
        facebookUsername,
        twitterUsername,
      } = req.body;

      const recruiter = await Recruiter.findOne({ email: email }).exec();
      if (recruiter) {
        return res.status(400).json("User already exists");
      }
      if (String(password) !== String(confirmPassword)) {
        return res.status(400).json("Passwords don't match");
      }
      const hashedPassword = await bcrypt.hash(password, 12);

      const newRecruiter = await new Recruiter({
        email,
        password: hashedPassword,
        name: fName + " " + lName,
        birthdate: new Date(dob),
        height,
        weight,
        waist,
        gender,
        nationality: country,
        ethnicity,
        hairColor,
        eyeColor,
        bodyType,
        dressSize,
        experience,
        instagram: instaUsername,
        facebook: facebookUsername,
        twitter: twitterUsername,
      });

      await newRecruiter.save();
      res.status(200).send({ ...newRecruiter, type: "Recruiter" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json(error);
  }
};
