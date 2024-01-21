const passport = require("passport")
const checkAuth = require("../middlewares/checkAuth")

const authRoutes = require("express").Router()

authRoutes.route("/google").get(checkAuth, passport.authenticate("google"))

authRoutes.route("/google/callback").get(
    passport.authenticate("google", {
        successRedirect: "/user",
        failureRedirect: "/auth/failure",
    })
)

authRoutes.get("/failure", (req, res) => {
    res.status(400).json({
        message: "Something Went Wrong",
        status: false,
    })
})

module.exports = authRoutes
