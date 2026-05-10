import Trip from "../models/Trip.js";

export const createTrip =
  async (req, res) => {

    try {

      const {
        title,
        destination,
        startDate,
        endDate,
        budget,
        travelers,
        description,
      } = req.body;

      const trip =
        await Trip.create({
          title,
          destination,
          startDate,
          endDate,
          budget,
          travelers,
          description,
        });

      res.status(201).json({
        success: true,
        message:
          "Trip Created Successfully",
        trip,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };



export const getTrips =
  async (req, res) => {

    try {

      const trips =
        await Trip.find();

      res.json({
        success: true,
        trips,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };



export const getTripById =
  async (req, res) => {

    try {

      const trip =
        await Trip.findById(
          req.params.id
        );

      res.json({
        success: true,
        trip,
      });

    } catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message:
          "Server Error",
      });
    }
  };