import express from "express";

import {
  createChecklistItem,
  getChecklist,
} from "../controllers/checklistController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();



// CREATE CHECKLIST ITEM
router.post(
  "/create",
  protect,
  createChecklistItem
);



// GET CHECKLIST
router.get(
  "/:tripId",
  protect,
  getChecklist
);

export default router;