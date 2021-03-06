
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyParser = require("body-parser");
const keys = require('./config/keys')

//Make sure you require the /models/User before /services/passport 
require('./models/User')
require('./services/passport')

const app = express();


//Using cookieSession which takes a configuration object with a maxAge to set the
//expiry on the cookie must be in milli secs hence my multiplaction (expires in 30 days)
//and and encription key to salt the cookie. You can pass an array of keys and 
//it will be set randomly for more security. Keep these in your config keys 
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)
//uses bodyParser middleware
app.use(bodyParser.json())

//Now tell passport to use cookies to handle authentication 
//Missing this middleware will give us an undefined req.user object
app.use(passport.initialize());
app.use(passport.session());


// second arg to remove deprecation warning.
// mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
mongoose.connect(keys.mongoURI, { useNewUrlParser: true }, function(err, db) {
  if (err) {
    console.log(
      "Unable to connect to the server. Please start the server. Error:",
      err
    );
  } else {
    console.log("Connected to Server successfully!");
  }
});
//must be down here since we are passing the app object we need to make sure that we use the above middlewares before sending it out authRoutes.
require("./routes/authRoutes")(app);
require("./routes/billingRoutes")(app);


//start listening on specified port
const PORT = process.env.PORT || "5000"
app.listen(PORT, console.log("listening on: ", PORT))