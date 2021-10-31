// mongoose schema for storing contestant data
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const toJSON = require("./plugins/toJOSON")

var ContestantSchema = new Schema({
  name: String,
  costumeTitle: String,
  costumeImgUrl: String,
  city: String,
  country: String,
  votes: {
    type: Number, default: 0
  },
});

ContestantSchema.plugin(toJSON);

// export the model
module.exports = mongoose.model('Contestant', ContestantSchema);