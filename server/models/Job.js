const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  days: Number,
  price: Number,
});

module.exports = mongoose.model("Job", jobSchema);
