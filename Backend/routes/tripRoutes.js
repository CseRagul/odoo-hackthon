import express from "express";

import {
  createTrip,
  getTrips,
  getTripById,
} from "../controllers/tripController.js";

const router =
  express.Router();

router.post(
  "/create",
  createTrip
);

router.get(
  "/",
  getTrips
);

router.get(
  "/:id",
  getTripById
);

export default router;