const express = require("express");
const passport = require("passport");
const router = express.Router();
const conversationController = require("../controllers/Conversation");
const { verifyAuthenticated } = require("../middlwares/auth");

router.get(
  "/",
  verifyAuthenticated,
  conversationController.getAllGroupConversation
);
router.get("/:id", verifyAuthenticated, conversationController.get);
router.post("/", verifyAuthenticated, conversationController.create);
router.get(
  "/privateConversation/:friendId",
  verifyAuthenticated,
  conversationController.getPrivateConversation
);
router.post(
  "/group",
  verifyAuthenticated,
  conversationController.createGroupConversation
);

module.exports = router;
