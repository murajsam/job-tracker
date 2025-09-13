import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: {
    type: String,
    enum: ["interview", "declined", "pending"],
    default: "pending",
    required: true,
  },
  thankYouNote: { type: String, required: true },
});

const Job = mongoose.model("Job", jobSchema);

export default Job;
