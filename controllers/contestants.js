const Joi = require("joi");
const contestantModel = require("../models/contestants");

const getContestantsHandler = (req, res) => {
  const contestants = contestantModel.getContestants();
  return res.send(contestants);
};

const getContestantHandler = (req, res) => {
  const { id } = req.params;

  const contestant = contestantModel.getContestant(id);

  if (contestant.length == 0) {
    return res
      .status(404)
      .send({ status: "error", message: "Contestant not found" });
  } else {
    return res.send(contestant[0]);
  }
};

const createContestantHandler = (req, res) => {
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
    const id = contestantModel.createContestant(body);
    return res
      .status(201)
      .send({ status: "Contestant created successfully", id: id });
  }
};

const updateContestantHandler = (req, res) => {
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

  const result = contestantModel.updateContestant(id, body);
  if (result) {
    return res.send({ status: "ok" });
  } else {
    return res
      .status(404)
      .send({ status: "error", message: "Contestant not found" });
  }
};

const deleteContestantHandler = (req, res) => {
  const { id } = req.params;
  const result = contestantModel.deleteContestant(id);
  if (result) {
    return res.send({ status: "ok" });
  } else {
    return res
      .status(404)
      .send({ status: "error", message: "Contestant not found" });
  }
};

const upvoteContestantHandler = (req, res) => {
  const { id } = req.params;
  const result = contestantModel.upvoteContestant(id);
  if (result[0]) {
    return res.send({ status: "ok", votes: result[1] });
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
