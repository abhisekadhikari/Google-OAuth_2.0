const isLoggedIn = (req, res, next) => {
    if (!req.user) {
        return res
            .status(401)
            .send("<a href='/auth/google'>Login or Signup</a>")
    }
    next()
}

module.exports = isLoggedIn
