const mongoose = require("mongoose");

const recommendationSchema = new mongoose.Schema({
  destination: { type: String, required: true, index: true },
  hotels: [
    {
      name: { type: String, required: true },
      type: { type: String, enum: ["cheap", "moderate", "luxury"], required: true },
      price: { type: String, required: true },
    },
  ],
  attractions: [{ type: String, required: true }],
});

module.exports = mongoose.model("Recommendation", recommendationSchema);