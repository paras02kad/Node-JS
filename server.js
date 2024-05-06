const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //! Stores all the data in req.body

//! Here we have imported the model person here from models folder
const person = require("./models/Person");
const Person = require("./models/Person");

app.get("/", (req, res) => {
  res.send(
    "Welcome to my hotel.. ow can I help you ?, we have a list of menus"
  );
});

app.post("/person", async (req, res) => {
  try {
    const data = req.body; //! Assuming the req.body contains the person data.

    const newPerson = new Person(data); //! Create a new person document using the mongoose model

    const response = await newPerson.save(); //! Save the new person to the database
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    err.status(500).json({ error: "Internal Server Error" });
  }

  //! Old way of storing data and is more complex.
  // newPerson.save((error, savedPerson) => {
  //   if (error) {
  //     console.log("error while saving the data in the server", error);
  //     res.status(500).json({ error: "Internal server error" });
  //   } else {
  //     console.log("data saved successfully");

  //   }

  //! Old way of fetching data from req.body
  // newPerson.name = data.name;
  // newPerson.age = data.age;
  // newPerson.gender = data.gender;
  // newPerson.mobile = data.mobile;
  // newPerson.email = data.email;
  // newPerson.address = data.address;
  // newPerson.email = data.email;
});

//! Get method to get the person's data
app.get('/person', async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    err.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
