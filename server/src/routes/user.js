const express = require("express");
const passport = require("passport");
const { verifyAuthenticated } = require("../middlwares/auth");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", verifyAuthenticated, userController.get);
router.put("/", verifyAuthenticated, userController.update);
router.get("/addfriend/:email", verifyAuthenticated, userController.addFriend);
router.get("/unfriend/:friendId", verifyAuthenticated, userController.unfriend);
router.get(
  "/removeFriendRequest/:friendId",
  verifyAuthenticated,
  userController.removeFriendRequest
);
router.get(
  "/declineFriendRequest/:friendId",
  verifyAuthenticated,
  userController.declineFriendRequest
);
router.get(
  "/acceptfriend/:friendId",
  verifyAuthenticated,
  userController.acceptFriend
);

module.exports = router;
