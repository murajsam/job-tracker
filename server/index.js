import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectToDB from "./config/db.js";
import jobsRoutes from "./routes/JobsRoutes.js";
import thankYouRoutes from "./routes/thankYouNoteRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectToDB();

app.use("/api/jobs", jobsRoutes);
app.use("/api/generate-thankyou", thankYouRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
