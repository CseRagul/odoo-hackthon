import React from "react";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// PAGES
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import MyTrips from "../pages/MyTrips";
import CreateTrip from "../pages/CreateTrip";
import BuildItinerary from "../pages/BuildItinerary";
import PackingChecklist from "../pages/PackingChecklist";
import TripNotes from "../pages/TripNotes";
import Activities from "../pages/Activities";
import Profile from "../pages/Profile";
import AdminDashboard from "../pages/AdminDashboard";

// PROTECTED ROUTE
import ProtectedRoute from "./ProtectedRoute";

const AppRoutes = () => {

  return (
    <BrowserRouter>

      <Routes>

        {/* LOGIN */}
        <Route
          path="/"
          element={<Login />}
        />



        {/* REGISTER */}
        <Route
          path="/register"
          element={<Register />}
        />



        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />



        {/* MY TRIPS */}
        <Route
          path="/my-trips"
          element={
            <ProtectedRoute>
              <MyTrips />
            </ProtectedRoute>
          }
        />



        {/* CREATE TRIP */}
        <Route
          path="/create-trip"
          element={
            <ProtectedRoute>
              <CreateTrip />
            </ProtectedRoute>
          }
        />



        {/* BUILD ITINERARY */}
        <Route
          path="/build-itinerary/:id"
          element={
            <ProtectedRoute>
              <BuildItinerary />
            </ProtectedRoute>
          }
        />



        {/* PACKING CHECKLIST */}
        <Route
          path="/packing-checklist/:id"
          element={
            <ProtectedRoute>
              <PackingChecklist />
            </ProtectedRoute>
          }
        />



        {/* TRIP NOTES */}
        <Route
          path="/trip-notes/:id"
          element={
            <ProtectedRoute>
              <TripNotes />
            </ProtectedRoute>
          }
        />



        {/* ACTIVITIES */}
        <Route
          path="/activities/:id"
          element={
            <ProtectedRoute>
              <Activities />
            </ProtectedRoute>
          }
        />



        {/* PROFILE */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* ADMIN DASHBOARD */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute adminOnly>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* LOGIN REDIRECT */}
        <Route
          path="/login"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />
    


        {/* 404 */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;