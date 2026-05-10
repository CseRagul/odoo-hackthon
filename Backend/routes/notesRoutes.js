import express from "express";

import {
  createNote,
  getNotes,
} from "../controllers/notesController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();



// CREATE NOTE
router.post(
  "/create",
  protect,
  createNote
);



// GET NOTES
router.get(
  "/:tripId",
  protect,
  getNotes
);

export default router;