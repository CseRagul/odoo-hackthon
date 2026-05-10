import Checklist from "../models/Checklist.js";



// CREATE CHECKLIST ITEM
export const createChecklistItem =
  async (req, res) => {

    try {

      const {
        trip,
        item,
        category,
      } = req.body;

      const checklist =
        await Checklist.create({
          trip,
          item,
          category,
        });

      res.status(201).json({
        success: true,
        message:
          "Checklist Item Added",
        checklist,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };




// GET CHECKLIST
export const getChecklist =
  async (req, res) => {

    try {

      const checklist =
        await Checklist.find({
          trip:
            req.params.tripId,
        });

      res.status(200).json({
        success: true,
        checklist,
      });

    } catch (error) {

      res.status(500).json({
        success: false,
        message:
          error.message,
      });
    }
  };