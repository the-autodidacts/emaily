
const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')

//Make sure you require the /model/users before /services/passport 
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

//Now tell passport to use cookies to handle authentication
app.use(passport.initialize());
app.use(passport.session());


// second arg to remove deprecation warning.
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
require("./routes/authRoutes")(app)


//start listening on specified port
const port = process.env.PORT || "5000"
app.listen(port, console.log("listening on: ", port))
