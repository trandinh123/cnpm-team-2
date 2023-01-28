const express = require("express");
const passport = require("passport");
const { verifyAuthenticated } = require("../middlwares/auth");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/", verifyAuthenticated, userController.get);
router.put("/:id", userController.update);
router.get(
  "/addfriend/:friendId",
  verifyAuthenticated,
  userController.addFriend
);
router.get("/unfriend/:friendId", verifyAuthenticated, userController.unfriend);
router.get(
  "/acceptfriend/:friendId",
  verifyAuthenticated,
  userController.acceptFriend
);

module.exports = router;
