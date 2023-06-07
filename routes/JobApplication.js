import Express from "express";
import { applyJob } from "../controllers/jobApplicationController.js";

export const router = Express.Router();

router.post("/apply", applyJob);
