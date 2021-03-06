const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

//The User object is our Model Class we can create a new model instance and save it to the db
const User = mongoose.model("users");

//Generate a token and give to the user by defining a function called serializeUser
//Done is a call back that we have to call first argument is error second arg is identifying
//piece of info. This id is the mongo object id.
passport.serializeUser((user, done) => {
  done(null, user.id);
});

//id is the id from the serializeUser user.id it is now used to deserialize the user.
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true
    },

    //this call back function has the profile passed in as an argument which we will
    //use to create a new User with the googleId <- one of the attributes we created
    //in the User.js Model and assign profile.id to it from Google
    //.save() saves it to the db.

    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({googleId: profile.id})
      if (existingUser) {
        return done(null, existingUser);
      } 
        //create a new Mongo user record.
      const user = await new User({ googleId: profile.id }).save()
      done(null, user)
    }
  )
);
