const express = require("express");
const passport = require("passport");
const router = express.Router();
const messageController = require("../controllers/message");
const { verifyAuthenticated } = require("../middlwares/auth");

router.get(
  "/all",
  verifyAuthenticated,
  messageController.getAllByConversationId
);
router.get("/getLatestMessage", verifyAuthenticated, messageController.getLatestMessage)
router.post("/", messageController.create);

module.exports = router;
