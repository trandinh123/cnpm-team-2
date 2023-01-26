function verifyAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.redirect("/auth/google/failure");
}

module.exports = {
  verifyAuthenticated,
};
