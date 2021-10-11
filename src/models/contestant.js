const mongoose = require("mongoose");
const contestantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      min: 1,
      required: true,
    },
    costumeTitle: {
      type: String,
      min: 1,
      required: true,
    },
    costumeImgUrl: {
      type: String,
      min: 1,
      required: true,
    },
    city: {
      type: String,
      min: 1,
      required: true,
    },
    country: {
      type: String,
      min: 1,
      required: true,
    },
    votes: {
      type: Number,
    },
  },
  { versionKey: false }
);

contestantSchema.set("toJSON", {
  virtuals: false,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

contestantSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

contestantSchema.set("toJSON", {
  virtuals: true,
});

module.exports = mongoose.model("Contestant", contestantSchema);
