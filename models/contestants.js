const mongoose = require("mongoose");

const contestantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  costumeTitle: {
    type: String,
    required: true,
  },
  costumeImgUrl: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
});

const Contestant = mongoose.model("Contestant", contestantSchema);

module.exports = Contestant;
