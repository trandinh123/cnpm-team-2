const express = require("express");
const passport = require("passport");
const router = express.Router();
const conversationController = require("../controllers/Conversation");

router.get("/", (req, res) => {
  res.send("hello conversation");
});
router.get("/:id", conversationController.get);
router.post("/", conversationController.create);

module.exports = router;
