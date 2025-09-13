import Job from "../models/Job.js";

const getAllJobs = async (_, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const createJob = async (req, res) => {
  try {
    const { company, position, status, thankYouNote } = req.body;
    const newJob = new Job({
      company,
      position,
      status,
      thankYouNote,
    });
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const updateJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const { company, position, status, thankYouNote } = req.body;
    const job = await Job.findByIdAndUpdate(id, {
      company,
      position,
      status,
      thankYouNote,
    });
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const deleteJobById = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findByIdAndDelete(id);
    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }
    res.status(200).json(job);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  getAllJobs,
  createJob,
  getJobById,
  updateJobById,
  deleteJobById,
};
