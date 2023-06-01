import { Model } from "../models/Models.js";

export const getAllModels = async (req, res) => {
    try {
        const models = await Model.find();
        res.status(200).json(models);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

//get model by id
export const getModelById = async (req, res) => {
    try {
        const model = await Model.findById(req.params.id);
        res.status(200).json(model);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

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
}





