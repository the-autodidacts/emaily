
const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')

require('./services/passport')

const app = express();
mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
require("./routes/authRoutes")(app)

const port = process.env.PORT || "5000"

app.listen(port, console.log("listening on: ", port))
