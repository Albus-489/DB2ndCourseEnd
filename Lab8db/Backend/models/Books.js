const mongoose = require("mongoose");

var Books = mongoose.model("Books", {
  _id: { type: Number },
  name: { type: String },
  author: { type: String },
  year: { type: Number },
  genre: { type: String },
});

module.exports = { Books };
