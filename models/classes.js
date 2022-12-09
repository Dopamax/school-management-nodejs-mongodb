const mongoose = require("mongoose");

const Classes = new mongoose.Schema({
    title: String,
    level :String,
    subjectId: String
   });

module.exports = mongoose.model("Classe", Classes);