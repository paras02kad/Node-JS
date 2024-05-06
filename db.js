const mongoose = require("mongoose");

//! Define the MongoDB connection URL
const mongoURL = "mongodb://localhost:27017/hotels";

mongoose.connect(mongoURL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//! Get the default connections
//! Mongoose represent a default connection object representing the MongoDB connection.
const db = mongoose.connection;

//! Define Event listeners for database connections
db.on("connected", () => {
  console.log("connected to MongoDB server");
});

db.on("error", () => {
  console.log("error while connecting to MongoDB server");
});

db.on("disconnected", () => {
  console.log("disconnected from MongoDb server");
});
