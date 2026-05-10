import Itinerary from "../models/Itinerary.js";



// CREATE ITINERARY
export const createItinerary =
  async (req, res) => {

    try {

      const {
        trip,
        day,
        title,
        activities,
        notes,
      } = req.body;

      const itinerary =
        await Itinerary.create({
          trip,
          day,
          title,
          activities,
          notes,
        });

      res.status(201).json({
        success: true,
        message:
          "Itinerary Created",
        itinerary,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };




// GET ITINERARY BY TRIP
export const getTripItinerary =
  async (req, res) => {

    try {

      const itinerary =
        await Itinerary.find({
          trip:
            req.params.tripId,
        });

      res.status(200).json({
        success: true,
        itinerary,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };