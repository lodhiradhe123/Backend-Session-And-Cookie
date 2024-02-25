const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.:27017/practicedatabase");

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

module.exports = mongoose.model("user", userschema);
