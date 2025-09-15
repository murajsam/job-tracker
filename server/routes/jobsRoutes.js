import {
  getAllJobs,
  createJob,
  getJobById,
  updateJobById,
  deleteJobById,
} from "../controllers/jobsControllers.js";
import express from "express";

const jobsRoutes = express.Router();

jobsRoutes.get("/", getAllJobs);
jobsRoutes.post("/", createJob);
jobsRoutes.get("/:id", getJobById);
jobsRoutes.put("/:id", updateJobById);
jobsRoutes.delete("/:id", deleteJobById);

export default jobsRoutes;
