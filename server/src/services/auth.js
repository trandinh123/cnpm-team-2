const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
require("dotenv").config("../../.env");
const User = require("../models/User");
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: `${
        process.env.SERVER_URL || "http://localhost:5000"
      }/auth/google/callback`,
      passReqToCallback: true,
    },
    async function (request, accessToken, refreshToken, profile, done) {
      try {
        const user = await User.findOne({
          googleId: profile.id,
        });
        if (!user) {
          const newUser = await User.create({
            ...profile._json,
            googleId: profile.id,
          });
          return done(null, newUser);
        }
        return done(null, user);
      } catch (err) {
        console.log(err.message);
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(async function (userId, done) {
  const user = await User.findById(userId);
  done(null, user);
});
