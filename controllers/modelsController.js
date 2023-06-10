import { Types } from "mongoose";
import { Model } from "../models/Models.js";
import { ObjectId } from "mongodb";

export const getAllModels = async (req, res) => {
  try {
    const models = await Model.find();
    res.status(200).json(models);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get model by id
export const getModelById = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    res.status(200).json(model);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//update profile pic
export const updateProfilePic = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id);
    model.profilePic = req.body.profilePic;
    const updatedModel = await model.save();
    res.status(200).json(updatedModel);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// update gallery
export const updateGallery = async (req, res) => {
  try {
    const modelId = req.params.id;
    console.log(modelId);
    const model = await Model.findById(modelId);
    model.gallery = req.body.gallery;
    const updatedModel = await model.save();
    res.status(200).json(updatedModel);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
}
