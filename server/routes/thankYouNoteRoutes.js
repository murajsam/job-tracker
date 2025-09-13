import express from "express";
import { generateThankYouNote } from "../controllers/generateThankYouNoteController.js";

const thankYouNoteRoutes = express.Router();

thankYouNoteRoutes.post("/", generateThankYouNote);

export default thankYouNoteRoutes;
