import Express from "express";
import { Model } from "../models/Models.js";
import { updateGallery } from "../controllers/modelsController.js";
export const router = Express.Router();

router.post("/updateGallery/:id", updateGallery);