const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new mongoose.Schema({
  url: String,
  codeBase64Img: String,
}, {
  timestamps: true
});

module.exports = mongoose.model("Photos", PhotoSchema);
