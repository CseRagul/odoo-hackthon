import express from "express";

import {
  createItinerary,
  getTripItinerary,
} from "../controllers/itineraryController.js";

import protect from "../middleware/authMiddleware.js";

const router = express.Router();



// CREATE ITINERARY
router.post(
  "/create",
  protect,
  createItinerary
);



// GET ITINERARY BY TRIP
router.get(
  "/:tripId",
  protect,
  getTripItinerary
);

export default router;