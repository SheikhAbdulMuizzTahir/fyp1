import Express from "express";
import { createJob, deleteJob, getAllJobs, getJobById, searchJobs, updateJob } from "../controllers/jobsController.js";
export const router = Express.Router();

router.get("/", getAllJobs);
router.get("/:id", getJobById);
router.delete("/delete/:id", deleteJob);
router.post("/search", searchJobs);
router.post("/create", createJob);
router.post("/update/:id", updateJob);