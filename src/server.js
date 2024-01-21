const { app } = require("./app")
const { connectDb } = require("./config/db")
const PORT = 3000 || process.env.PORT

connectDb()
    .then(() => {
        app.listen(PORT, () => {
            console.log("🚀 Server Running 🚀")
        })
    })
    .catch((err) => {
        console.log("Server Could Not Started", err)
        process.exit(1)
    })
