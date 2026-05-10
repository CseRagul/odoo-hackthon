import mongoose from "mongoose";

const itinerarySchema =
  new mongoose.Schema(
    {
      trip: {
        type:
          mongoose.Schema.Types.ObjectId,
        ref: "Trip",
        required: true,
      },

      day: {
        type: Number,
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      activities: [
        {
          type: String,
        },
      ],

      notes: {
        type: String,
        default: "",
      },
    },
    {
      timestamps: true,
    }
  );

const Itinerary =
  mongoose.model(
    "Itinerary",
    itinerarySchema
  );

export default Itinerary;