const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
  "/google",
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
    });
  });
});

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: "/",
    failureRedirect: "/auth/google/failure",
  })
);

router.get("/google/failure", (req, res) => {
  return res.status(200).json({
    success: false,
    msg: "Failed to authenticate",
  });
});

module.exports = router;
