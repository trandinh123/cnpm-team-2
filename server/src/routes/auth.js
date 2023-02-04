const express = require("express");
const passport = require("passport");
const router = express.Router();
const { verifyAuthenticated } = require("../middlwares/auth");

async function getSuccessRedirectUrl(req, res, next) {
  if (req.query.returnTo) {
    req.session.returnTo = req.query.returnTo;
  }
  next();
}

router.get(
  "/google",
  getSuccessRedirectUrl,
  passport.authenticate("google", { scope: ["email", "profile"] })
);

router.get("/google/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({
        success: false,
        msg: err,
      });
    }
    req.session.destroy();
    return res.status(200).json({
      success: true,
      msg: "Logout successfully",
    });
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successReturnToOrRedirect:
      process.env.CLIENT_URL || "http://localhost:3000",
    failureRedirect: "/auth/google/failure",
    keepSessionInfo: true,
  })
);

router.get("/google/failure", (req, res) => {
  return res.status(200).json({
    success: false,
    msg: "Failed to authenticate",
  });
});

router.get("/user", verifyAuthenticated, (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
});

module.exports = router;
