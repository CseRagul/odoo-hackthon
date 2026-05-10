import mongoose from "mongoose";

const tripSchema =
  new mongoose.Schema(
    {
      title: {
        type: String,
        required: true,
      },

      destination: {
        type: String,
        required: true,
      },

      startDate: {
        type: String,
      },

      endDate: {
        type: String,
      },

      budget: {
        type: Number,
      },

      travelers: {
        type: Number,
      },

      description: {
        type: String,
      },
    },

    {
      timestamps: true,
    }
  );

const Trip =
  mongoose.model(
    "Trip",
    tripSchema
  );

export default Trip;