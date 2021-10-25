const Joi = require("joi");
const mongoose = require("mongoose");
const Contestant = require("../models/contestants");

const getContestantsHandler = async (req, res) => {
  const contestants = await Contestant.find();
  return res.send(contestants);
};

const getContestantHandler = async (req, res) => {
  const { id } = req.params;

  let contestant;
  if (mongoose.isValidObjectId(id)) {
    contestant = await Contestant.findById(id);
  }

  if (contestant) {
    return res.send(contestant);
  } else {
    return res
      .status(404)
      .send({ status: "error", message: "Contestant not found" });
  }
};

const createContestantHandler = async (req, res) => {
  const { body } = req;
  const schema = Joi.object({
    name: Joi.string().required(),
    costumeTitle: Joi.string().required(),
    costumeImgUrl: Joi.string().required(),
    city: Joi.string().required(),
    country: Joi.string().required(),
  });

  const { error, value } = schema.validate(body);

  if (error) {
    return res
      .status(400)
      .send({ status: "error", message: error.details[0].message });
  } else {
    const contestant = new Contestant(body);
    await contestant.save();
    return res
      .status(201)
      .send({ status: "Contestant created successfully", id: contestant._id });
  }
};

const updateContestantHandler = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const schema = Joi.object({
    name: Joi.string(),
    costumeTitle: Joi.string(),
    costumeImgUrl: Joi.string(),
    city: Joi.string(),
    country: Joi.string(),
  });

  const { error, value } = schema.validate(body);

  if (error) {
    return res
      .status(400)
      .send({ status: "error", message: error.details[0].message });
  }

  let contestant;
  if (mongoose.isValidObjectId(id)) {
    contestant = await Contestant.findByIdAndUpdate(id, body, { new: true });
  }

  if (contestant) {
    return res.send({ status: "ok" });
  } else {
    return res
      .status(404)
      .send({ status: "error", message: "Contestant not found" });
  }
};

const deleteContestantHandler = async (req, res) => {
  const { id } = req.params;

  let contestant;
  if (mongoose.isValidObjectId(id)) {
    contestant = await Contestant.findByIdAndDelete(id);
  }

  if (contestant) {
    return res.send({ status: "ok" });
  } else {
    return res
      .status(404)
      .send({ status: "error", message: "Contestant not found" });
  }
};

const upvoteContestantHandler = async (req, res) => {
  const { id } = req.params;

  let contestant;
  if (mongoose.isValidObjectId(id)) {
    contestant = await Contestant.findByIdAndUpdate(
      id,
      { $inc: { votes: 1 } },
      { new: true }
    );
  }

  if (contestant) {
    return res.send({ status: "ok", votes: contestant.votes });
  } else {
    return res
      .status(404)
      .send({ status: "error", message: "Contestant not found" });
  }
};

module.exports = {
  getContestantsHandler,
  getContestantHandler,
  createContestantHandler,
  updateContestantHandler,
  deleteContestantHandler,
  upvoteContestantHandler,
};
