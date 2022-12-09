const mongoose = require("mongoose");

const Teachers = new mongoose.Schema({
    name: String,
    birth_date: Date,
    birth_city: String,
    address: String,
    email: String,
    password: String

  });

module.exports = mongoose.model("Teacher", Teachers);