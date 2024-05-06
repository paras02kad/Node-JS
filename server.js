const express = require("express");
const app = express();
const db = require("./db");

const bodyParser = require("body-parser");
app.use(bodyParser.json()); //! Stores all the data in req.body

//! Here we have imported the model person from models folder
const person = require("./models/Person");

//! Here we have imported the model MenuItem from models folder
const MenuItem = require("./models/MenuItem");

app.get("/", (req, res) => {
  res.send(
    "Welcome to my hotel.. ow can I help you ?, we have a list of menus"
  );
});

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


//! Here we are importing router files
const personRoutes = require("./routes/personRoutes");
app.use("/person", personRoutes);


const menuRoutes = require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000, () => {
  console.log("listening on port 3000");
});
