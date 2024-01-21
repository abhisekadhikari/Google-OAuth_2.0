const passport = require("passport")
const { Strategy } = require("passport-google-oauth20")
const { userModel } = require("../models/user.model")
const asyncErrorHandler = require("../utils/asyncErrorHandler")

passport.use(
    new Strategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CLIENT_REDIRECT_URL,
            scope: ["email", "profile"],
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                const findUser = await userModel.findOne({
                    email: profile._json.email,
                })

                if (!findUser) {
                    const { name, email, picture } = profile._json
                    createNewUser = await userModel.create({
                        username: name,
                        email,
                        profilePicture: picture,
                    })
                    return done(null, createNewUser.id)
                }

                done(null, findUser?.id)
            } catch (error) {
                done(error, null)
            }
        }
    )
)

passport.serializeUser((user, done) => {
    done(null, user)
})

passport.deserializeUser((user, done) => {
    done(null, user)
})
