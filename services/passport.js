const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

//The User object is our Model Class we can create a new model instance and save it to the db
const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },

    //this call back function has the profile passed in as an argument which we will
    //use to create a new User with the googleId <- one of the attributes we created
    //in the User.js Model and assign profile.id to it from Google
    //.save() saves it to the db.

    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        //existingUser is argument returned after the promise resolves if there is
        //user with googleId === profile.id it is a null value it is a mongoose record instance

        if (existingUser) {
          //first argument is the error so we pass null second argument is the user record
          done(null, existingUser);
        } else {
          //create a new Mongo user record.
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user));
        }
      });
    }
  )
);
