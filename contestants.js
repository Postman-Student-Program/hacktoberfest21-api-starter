const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Contestant = require("./schema/Contestant");
const cors = require("cors");

/**
 * @route : GET /contestants
 * @description: Get all contestants
 * @access: public
 */
router.get("/", async (req, res) => {
  try {
    const allcontestants = await Contestant.find();
    arr = allcontestants.map((o) => {
      //delete Object.assign(o, {['id']: o['_id'] })['_id'];
      //console.log(o);
      var str = JSON.stringify(o);
      str = str.replace("_id", "id");
      o = JSON.parse(str);
      //console.log("Post string replacement ", o);
      return o;
    });
    //console.log(allcontestants, arr);
    return res.json(arr);
  } catch (error) {
    //console.log(error);
    const err = {
      status: 500,
      message: "Something went wrong",
    };
    res.status(500).json(err);
  }
});

/**
 * @route : Get /contestants/:id
 * @description: Get the contestant
 * @access: Public
 */
router.get("/:id", async (req, res) => {
  try {
    const user = await Contestant.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Contestant not found",
      });
    }
    const toreturn = {
      id: user._id,
      name: user.name,
      country: user.country,
      city: user.city,
      costumeTitle: user.costumeTitle,
      costumeImgUrl: user.costumeImgUrl,
      votes: user.votes,
    };
    return res.json(toreturn);
  } catch (error) {
    //console.log(error);
    const err = {
      status: 500,
      message: "Something went wrong",
    };
    res.status(500).json(err);
  }
});

/**
 * @route : PATCH /contestants/:id
 * @description: Update the contestant
 * @access: Public
 */
router.patch(
  "/:id",
  [
    check("name", "Name is required").optional().not().isEmpty(),
    check("costumeTitle", "Costume Title is required")
      .optional()
      .not()
      .isEmpty(),
    check("costumeImgUrl", "Costume Image URL is required")
      .optional()
      .not()
      .isEmpty(),
    check("city", "city is required").optional().not().isEmpty(),
    check("country", "Country is required").optional().not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const error = validationResult(req).errors;
      //console.log(error);
      if (error.length !== 0) {
        //400 means bad request, 200 is all ok

        const errors = [];
        for (var i = 0; i < error.length; i++) {
          const x = error[i];
          //console.log(x);
          errors.push({
            status: "error",
            message: x.msg,
          });
        }
        return res.status(400).json(errors);
      }
      let user = await Contestant.findById(req.params.id);
      if (!user) {
        return res.status(404).json({
          status: "error",
          message: "Contestant not found",
        });
      }
      user = await Contestant.findOneAndUpdate(
        { _id: user._id },
        { $set: req.body }
      );

      //console.log(user);
      await user.save();
      return res.status(200).json({
        status: "ok",
      });
      // @TODO: Add case of check validation in patch body, can update other fields too
    } catch (error) {
      //console.log(error);
      const err = {
        status: 500,
        message: "Something went wrong",
      };
      res.status(500).json(err);
    }
  }
);

/**
 * @route: DELETE /contestants/:id
 * @description: Delete this contestant
 * @access: Public
 */
router.delete("/:id", async (req, res) => {
  try {
    const user = await Contestant.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Contestant not found",
      });
    }
    await Contestant.deleteOne({ _id: user._id });

    res.status(200).json({ status: "ok" });
  } catch (error) {
    const err = {
      status: 500,
      message: "Something went wrong",
    };
    res.status(500).json(err);
  }
});

/**
 * @route : POST /contestants
 * @description: Add a new contestant
 * @access: Public
 */
router.post(
  "/",
  [
    check("name", "Name is required").not().isEmpty(),
    check("costumeTitle", "Costume Title is required").not().isEmpty(),
    check("costumeImgUrl", "Costume Image URL is required").not().isEmpty(),
    check("city", "city is required").not().isEmpty(),
    check("country", "Country is required").not().isEmpty(),
  ],
  async (req, res) => {
    try {
      const error = validationResult(req).errors;
      // console.log(req);
      // console.log(req.body, "is request body", error);
      if (error.length !== 0) {
        //400 means bad request, 200 is all ok

        const errors = [];
        for (var i = 0; i < error.length; i++) {
          const x = error[i];
          //console.log(x);
          errors.push({
            status: "error",
            message: x.msg,
          });
        }
        return res.status(400).json(errors);
      }
      const newcontestant = req.body;
      newcontestant["votes"] = 0;
      const user = new Contestant(newcontestant);
      await user.save();
      return res.status(201).json({ status: "ok", id: user._id });
    } catch (error) {
      //console.log(error);
      const err = {
        status: 500,
        message: "Something went wrong",
      };
      res.status(500).json(err);
    }
  }
);

/**
 * @route : PATCH /contestants/:id/upvote
 * @description: Add an upvote
 * @access: Public
 */
router.patch("/:id/upvote", async (req, res) => {
  try {
    let user = await Contestant.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        message: "Contestant not found",
      });
    }
    const updated_votes = user.votes + 1;
    //console.log(user.votes, updated_votes);
    user = await Contestant.findOneAndUpdate(
      { _id: user._id },
      {
        $set: {
          votes: updated_votes,
        },
      }
    );

    await user.save();
    //console.log(user);
    return res.status(200).json({
      status: "ok",
      votes: updated_votes,
    });
    // @TODO: Add case of check validation in patch body, can update other fields too
  } catch (error) {
    //console.log(error);
    const err = {
      status: 500,
      message: "Something went wrong",
    };
    res.status(500).json(err);
  }
});

module.exports = router;
