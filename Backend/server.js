import crypto from "crypto";
global.crypto = crypto;

import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import tripRoutes from "./routes/tripRoutes.js";
import itineraryRoutes from "./routes/itineraryRoutes.js";
import checklistRoutes from "./routes/checklistRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";

import connectDB from "./config/db.js";

dotenv.config();

const app = express();


// ======================
// DATABASE CONNECTION
// ======================

connectDB();


// ======================
// MIDDLEWARE
// ======================

app.use(express.json());

app.use(
  cors({
    origin: [
      "https://trip-planner-hackathon.vercel.app",
      "http://localhost:5173",
    ],
    credentials: true,
  })
);


// ======================
// TEST ROUTE
// ======================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend Running Successfully 🚀",
  });
});


// ======================
// API ROUTES
// ======================

app.use("/api/auth", authRoutes);

app.use("/api/trips", tripRoutes);

app.use("/api/itinerary", itineraryRoutes);

app.use("/api/checklist", checklistRoutes);

app.use("/api/notes", notesRoutes);


// ======================
// HEALTH CHECK
// ======================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is healthy 🚀",
  });
});


// ======================
// 404 HANDLER
// ======================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});


// ======================
// GLOBAL ERROR HANDLER
// ======================

app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
});


// ======================
// SERVER
// ======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});