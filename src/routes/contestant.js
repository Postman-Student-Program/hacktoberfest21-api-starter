const express = require("express");
const {
  getAPIstatus,
  addContestant,
  getContestants,
  getSpecificContestant,
  updateContestant,
  upvoteContestant,
  deleteContestant,
} = require("../controllers/contestant");

const router = express.Router();

router.get("", getAPIstatus);
router.post("/contestants", addContestant);
router.get("/contestants", getContestants);
router.get("/contestants/:id", getSpecificContestant);
router.patch("/contestants/:id", updateContestant);
router.patch("/contestants/:id/upvote", upvoteContestant);
router.delete("/contestants/:id", deleteContestant);

module.exports = router;
