const express = require("express");
const passport = require("passport");
const { verifyAuthorization } = require("../middlwares/auth");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/:id", userController.get);
router.put("/:id", userController.update);

module.exports = router;
