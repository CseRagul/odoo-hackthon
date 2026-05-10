import Note from "../models/Note.js";



// CREATE NOTE
export const createNote =
  async (req, res) => {

    try {

      const {
        trip,
        title,
        content,
      } = req.body;

      const note =
        await Note.create({
          trip,
          title,
          content,
        });

      res.status(201).json({
        success: true,
        message:
          "Note Created",
        note,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };




// GET NOTES
export const getNotes =
  async (req, res) => {

    try {

      const notes =
        await Note.find({
          trip:
            req.params.tripId,
        });

      res.status(200).json({
        success: true,
        notes,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };