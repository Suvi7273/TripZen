const mongoose = require("mongoose");
const Recommendation = require("../models/Recommendation");

const sampleData = [
  {
    destination: "Paris",
    hotels: [
      { name: "Hotel Le Bristol", type: "luxury", price: "$$$" },
      { name: "Hotel Ibis Bastille", type: "moderate", price: "$$" },
      { name: "Hotel Formule 1", type: "cheap", price: "$" },
    ],
    attractions: [
      "Eiffel Tower",
      "Louvre Museum",
      "Notre-Dame Cathedral",
      "Sacré-Cœur Basilica",
      "Versailles Palace",
    ],
  },
  {
    destination: "New York",
    hotels: [
      { name: "The Plaza Hotel", type: "luxury", price: "$$$" },
      { name: "Hampton Inn Manhattan", type: "moderate", price: "$$" },
      { name: "HI NYC Hostel", type: "cheap", price: "$" },
    ],
    attractions: [
      "Statue of Liberty",
      "Central Park",
      "Metropolitan Museum of Art",
      "Times Square",
      "Brooklyn Bridge",
    ],
  },
  {
    destination: "Tokyo",
    hotels: [
      { name: "Park Hyatt Tokyo", type: "luxury", price: "$$$" },
      { name: "Hotel Sunroute Plaza", type: "moderate", price: "$$" },
      { name: "Nine Hours Capsule", type: "cheap", price: "$" },
    ],
    attractions: [
      "Shibuya Crossing",
      "Tokyo Skytree",
      "Senso-ji Temple",
      "Shinjuku Gyoen National Garden",
      "Tsukiji Fish Market",
    ],
  },
];

async function populateDatabase() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/travelPlanner", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Clear existing data
    await Recommendation.deleteMany({});
    console.log("Cleared existing recommendations");

    // Insert sample data
    await Recommendation.insertMany(sampleData);
    console.log("Inserted sample data");

    // Verify insertion
    const count = await Recommendation.countDocuments();
    console.log(`Total documents: ${count}`);
  } catch (error) {
    console.error("Error populating database:", error);
  } finally {
    mongoose.connection.close();
  }
}

populateDatabase();
