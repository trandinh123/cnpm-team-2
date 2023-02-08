const User = require("../models/User");

async function verifyAuthenticated(req, res, next) {
  if (process.env.TEST_USER) {
    req.user = await User.findById(process.env.TEST_USER);
    return next();
  }
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/auth/google/failure");
}

module.exports = {
  verifyAuthenticated,
};
