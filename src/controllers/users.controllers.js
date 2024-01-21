const asyncErrorHandler = require("../utils/asyncErrorHandler")
const { userModel } = require("../models/user.model")

const userProfileController = asyncErrorHandler(async (req, res) => {
    const user = await userModel.findById(req.user)
    res.render("home", {
        user,
    })
})

const userLogout = (req, res) => {
    req.session = null
    req.logout()
    res.redirect("/")
}

module.exports = { userProfileController, userLogout }
