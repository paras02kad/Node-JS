const express = require("express");
const router = express.Router();
const person = require("./../models/Person");

//! Post method to post person's data
router.post("/", async (req, res) => {
  try {
    const data = req.body; //! Assuming the req.body contains the person data.

    const newPerson = new person(data); //! Create a new person document using the mongoose model

    const response = await newPerson.save(); //! Save the new person to the database
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Get method to get the person's data
router.get("/", async (req, res) => {
  try {
    const data = await person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

//! Parameterized end point
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; //! This extracts the work type from the url parameter.
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await person.find({ work: workType });
      console.log("Response fetched successfully");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Invalid work type" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //! Extract the id from URL parameter
    const updatedPersonData = req.body; //! Updated data for the person sent by client.

    const response = await person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, //! Return the updated document
        runValidators: true, //! Run mongoose validations
      }
    );

    if (!response) {
      res.status(404).json({ error: "Person not found" }); //! If we don't have a person of the given id;
    }
    console.log("data modified");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id; //! Extract the id from URL parameter
    const response = await person.findByIdAndDelete(personId);
    if (!response) {
      return res.status(404).json({ error: "Person not found" });
    }
    console.log("data deleted");
    res.status(200).json({ message: "person deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
