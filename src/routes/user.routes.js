const userRoute = require("express").Router()
const {
    userProfileController,
    userLogout,
} = require("../controllers/users.controllers")

userRoute.route("/").get(userProfileController)

userRoute.route("/logout").get(userLogout)

module.exports = { userRoute }
