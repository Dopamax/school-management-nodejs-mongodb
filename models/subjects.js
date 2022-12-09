const mongoose = require("mongoose");

const Subjects = new mongoose.Schema({
    title: String,
   });

module.exports = mongoose.model("Subject", Subjects);