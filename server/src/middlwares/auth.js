function verifyAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/auth/google/failure");
}

function verifyAuthorization(req, res, next) {
  if (req.isAuthenticated() && req.user._id.toString() === req.query.userId) {
    return next();
  }
  return res.status(403).json({
    success: false,
    msg: "Failed to authorization",
  });
}
module.exports = {
  verifyAuthenticated,
  verifyAuthorization,
};
