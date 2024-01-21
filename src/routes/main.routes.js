const checkAuth = require("../middlewares/checkAuth")
const isLoggedIn = require("../middlewares/isLoggedIn")
const authRoutes = require("./auth.routes")
const { userRoute } = require("./user.routes")

const router = require("express").Router()

router.get("/", checkAuth, (req, res) => {
    res.render("index")
})

router.use("/auth", authRoutes)

router.use("/user", isLoggedIn, userRoute)

module.exports = router
