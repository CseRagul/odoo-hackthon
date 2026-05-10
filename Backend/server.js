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
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);


// ======================
// ROOT ROUTE
// ======================

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "🚀 Backend Running Successfully",
  });
});


// ======================
// HEALTH CHECK
// ======================

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "✅ Server is healthy",
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
// 404 ROUTE
// ======================

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "❌ Route Not Found",
  });
});


// ======================
// GLOBAL ERROR HANDLER
// ======================

app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);

  res.status(500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


// ======================
// SERVER
// ======================

const PORT = process.env.PORT || 8080;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});


// ======================
// HANDLE SERVER ERRORS
// ======================

server.on("error", (err) => {
  console.error("❌ Failed to start server:", err);
});