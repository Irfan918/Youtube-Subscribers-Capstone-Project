const express = require("express");
const app = express();
const subscriberModel = require("./models/subscribers");
app.use(express.json());

// Displaying the message on homepage to the client browser.
app.get("/", (req, res) => {
  res.json("Backend Capstone Project");
});

// 1. Response with an array of all subscribers from the database.
app.get("/subscribers", async (req, res) => {
  const subscribers = await subscriberModel.find().select("-__v");
  res.json(subscribers);
});

// 2. Response with an array of subscriber's name and subscribed channel from database
app.get("/subscribers/names", async (req, res) => {
  const subscribers = await subscriberModel
    .find()
    .select("-_id -subscribedDate -__v");
  res.json(subscribers);
});

// 3. Get a particular subscriber from the database using _id
app.get("/subscribers/:id", async (req, res) => {
  const id = req.params.id;

  await subscriberModel
    .findById(id)
    .select("-__v")
    .then((data) => {
      if (!data) {
        // subscriber is not found for given id.
        error = Error(`Subscriber doesn't exist with the given _id: ${id}.`);
        res.status(400).json({ message: error.message });
      } else {
        res.json(data);
      }
    })
    .catch((error) => {
      // When the id is not entered in the correct format.
      res.status(400).json({
        message: `Subscriber doesn't exist with given _id: ${id}.`,
      });
    });
});

// Handles all the unwanted requests.
app.use((req, res) => {
  res.status(404).json({ message: "ERROR! 404 Route Not found" });
});

module.exports = app;