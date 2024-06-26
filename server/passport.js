
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const AppleStrategy = require("passport-apple").Strategy;
const passport = require("passport");
const UserAuth = require('./model/UserAuth.model.js')
require('dotenv').config();


const GOOGLE_CLIENT_ID ="831132307672-lgjaaf65hsb06dqn5i99pmhvarhc3hu9.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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"
const FACEBOOK_APP_ID = "7654500564669253"
const FACEBOOK_APP_SECRET = "00cc41900a8203ec36363efeb6cddf75"

;


passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      console.log(profile._json);
      try {
          let user = await UserAuth.findOne({ googleId: profile.id });
          if (!user) {
              user = new UserAuth({
                  googleId: profile._json.sub,
                  name: profile._json.name,
                  email: profile._json.email,
                  provider: 'google'
              });
              await user.save();
          }
          return done(null, user);
      } catch (err) {
          return done(err, false);
      }
  }));
  

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'emails'] // Ensure 'emails' is included
    }, async (accessToken, refreshToken, profile, done) => {
        console.log(profile._json); // Log the profile object to inspect the data
        try {
            let user = await UserAuth.findOne({ facebookId: profile.id });
            if (!user) {
                user = new UserAuth({
                    facebookId: profile._json.id,
                    name: profile._json.name,
                    email: profile._json.email, // Ensure 'emails' field is requested
                    provider: 'facebook'
                });
                await user.save();
            }
            return done(null, user);
        } catch (err) {
            return done(err, false);
        }
    }));
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser(async (id, done) => {
        try {
            const user = await UserAuth.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
    