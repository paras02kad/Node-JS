const express = require("express");
const router = express.Router();
const MenuItem = require("./../models/MenuItem");

//! HW -- Get method to get MenuItem data
router.get("/", async (req, res) => {
  try {
    const data = await MenuItem.find();
    console.log("data about menu fetched ");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server error" });
  }
});

//! HW -- Post method to post MenuItem data
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new MenuItem(data);
    const response = await newMenu.save();
    console.log("Data Saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:taste", async (req, res) => {
  try {
    const taste_type = req.params.taste; //! This extracts the taste from the url parameter.
    if (
      taste_type == "sweet" ||
      taste_type == "spicy" ||
      taste_type == "sour"
    ) {
      const response = await MenuItem.find({ taste: taste_type });
      console.log("Response fetched successfully");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid type of taste" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
