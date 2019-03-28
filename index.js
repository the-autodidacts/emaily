
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')

//Make sure you require the /model/users before /services/passport 
require('./models/User')
require('./services/passport')

const app = express();
// second arg to remove deprecation warning.
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
require("./routes/authRoutes")(app)

const port = process.env.PORT || "5000"

app.listen(port, console.log("listening on: ", port))
