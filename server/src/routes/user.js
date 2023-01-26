const express = require("express");
const passport = require("passport");
const { verifyAuthorization } = require("../middlwares/auth");
const router = express.Router();
const userController = require("../controllers/user");

router.get("/:id", verifyAuthorization, userController.get);
router.put("/:id", verifyAuthorization, userController.update);

module.exports = router;
