require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const path = require("path")
const session = require("express-session")
const passport = require("passport")
const mongoose = require("mongoose")

// module imports
const router = require("./routes/main.routes")
require("./strategy/google.strategy")

const app = express()

app.use(
    session({
        secret: "my_secret",
        resave: false,
        saveUninitialized: false,
        store: mongoose.connection.getClient(),
    })
)
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(passport.initialize())
app.use(passport.session())

app.use(express.static(path.join(__dirname, "public")))
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

app.use(router)

app.use((err, req, res, next) => {
    res.status(500).json({
        message: "Oops! An unexpected error has occured.",
        error: err.message,
    })
})

module.exports = { app }
