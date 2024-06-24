const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AppleStrategy = require("passport-apple").Strategy;
const passport = require("passport");



const GOOGLE_CLIENT_ID ="831132307672-lgjaaf65hsb06dqn5i99pmhvarhc3hu9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";


const APPLE_CLIENT_ID ="your id";
const APPLE_CLIENT_SECRET = "your id";

FACEBOOK_APP_ID = "7654500564669253";
FACEBOOK_APP_SECRET = "00cc41900a8203ec36363efeb6cddf75";


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
