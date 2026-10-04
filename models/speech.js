const mongoose = require("mongoose");

const speech = new mongoose.Schema({
  tag: {type: String, unique: true},
  name: {type: String, unique: true},
  value: {type: String, required: true, unique: true, unique: true},
});

module.exports = mongoose.model("speech", speech);