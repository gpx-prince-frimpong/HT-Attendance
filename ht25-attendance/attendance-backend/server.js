require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express App
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Debug: Check if MONGO_URI is Loaded
console.log("MONGO_URI:", process.env.MONGO_URI);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((error) => console.error("MongoDB connection error:", error));

// Create Schema
const attendeeSchema = new mongoose.Schema({
  name: String,
  phone: String,
  gender: String,
  denomination: String,
  residence: String,
  source: String,
});

const Attendee = mongoose.model("Attendee", attendeeSchema);

// Route to Add Attendee
app.post("/attendees", async (req, res) => {
  try {
    const newAttendee = new Attendee(req.body);
    await newAttendee.save();
    res.status(201).json(newAttendee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to Get Attendees
app.get("/attendees", async (req, res) => {
  try {
    const attendees = await Attendee.find();
    res.json(attendees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
