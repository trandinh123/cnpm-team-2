const express = require("express");
const passport = require("passport");
const { verifyAuthorization } = require("../middlwares/auth");
const router = express.Router();
const messageController = require("../controllers/message");

router.get("/", messageController.getByConversationId);
router.post("/", messageController.create);

module.exports = router;
