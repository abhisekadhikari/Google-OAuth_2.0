const protectedRoute = require("express").Router()
const isLoggedIn = require("../middlewares/isLoggedIn")

protectedRoute.get("/route", isLoggedIn, (req, res) => {
    res.status(200).render("home")
})

module.exports = protectedRoute
