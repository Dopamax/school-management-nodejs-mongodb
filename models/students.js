const mongoose = require("mongoose");

const Students = new mongoose.Schema({
    name: String,
    birth_date: Date,
    code: String,
    birth_city: String,
    address: String,
    email: String,

  });

module.exports = mongoose.model("Student", Students);