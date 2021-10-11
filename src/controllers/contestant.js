const Contestant = require("../models/contestant");

// @route POST/routes/
// @desc gets the api status
// @params none
// @permission all
exports.getAPIstatus = (req, res) => {
  res.status(200).json({ status: "ok" });
};

// @route POST/routes/contestants
// @desc adds a contestant
// @params none
// @permission all
exports.addContestant = (req, res) => {
  const { name, costumeTitle, costumeImgUrl, city, country, votes } = req.body;
  const contestant = new Contestant({
    name,
    costumeTitle,
    costumeImgUrl,
    city,
    country,
    votes,
  });

  contestant.save((err, data) => {
    if (data) {
      return res.status(201).json({
        description: "Contestant created successfully",
        id: data._id,
      });
    }
    if (err) {
      return res.status(400).json({
        description: "Bad request",
      });
    }
  });
};

// @route GET/routes/contestants
// @desc gets all the contestant
// @params none
// @permission all
exports.getContestants = (req, res) => {
  Contestant.find({}, (err, data) => {
    if (err) {
      return res.status(404).json({
        description: "Contestant not found",
      });
    }
    if (data) {
      res.status(200).json(data);
    }
  });
};

// @route GET/routes/contestants/:id
// @desc gets the added contestant
// @params none
// @permission all
exports.getSpecificContestant = (req, res) => {
  const id = req.params.id;

  Contestant.findOne({ _id: id }).then(async (data) => {
    if (!data) {
      return res.status(404).json({
        status: "error",
      });
    } else {
      return res.status(200).json(data);
    }
  });
};

// @route PATCH/routes/contestants/:id
// @desc gets all the contestant
// @params id
// @permission all
exports.updateContestant = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  Contestant.updateOne({ _id: id }, { $set: { name: name } }, (err, data) => {
    if (err) {
      return res.status(400).json({
        description: "Bad Request",
      });
    }
    if (data) {
      res.status(200).json({ status: "ok" });
    }
  });
};

// @route PATCH/routes/contestants
// @desc gets all the contestant
// @params id
// @permission all
exports.upvoteContestant = (req, res) => {
  const id = req.params.id;
  Contestant.findOneAndUpdate(
    { _id: id },
    { $inc: { votes: 1 } },
    { new: true },
    (err, data) => {
      if (err) {
        return res.status(400).json({
          status: err,
          message: "Contestant not found",
        });
      }
      if (data) {
        res.status(200).json({ status: "ok", votes: data.votes });
      }
    }
  );
};

// @route DELETE/routes/contestants/:id
// @desc delete the contestant
// @params id
// @permission all
exports.deleteContestant = (req, res) => {
  const id = req.params.id;
  Contestant.findOneAndDelete({ _id: id }).then(async (data) => {
    if (!data) {
      return res.status(404).json({
        status: "error",
      });
    } else {
      return res.status(200).json({ status: "ok" });
    }
  });
};
