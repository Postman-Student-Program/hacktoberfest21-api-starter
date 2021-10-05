const router = require("express").Router(),
  contestantsController = require("../controllers/contestants");

router
  .route("/")
  .get(contestantsController.getContestantsHandler)
  .post(contestantsController.createContestantHandler);

router
  .route("/:id")
  .get(contestantsController.getContestantHandler)
  .patch(contestantsController.updateContestantHandler)
  .delete(contestantsController.deleteContestantHandler);

router.patch("/:id/upvote", contestantsController.upvoteContestantHandler);

module.exports = router;
