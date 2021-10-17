const mongoose = require('mongoose');

const Contestant = new mongoose.Schema({
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
    required: true,
    default: 0
  },
});

module.exports = mongoose.model('contestant', Contestant);