const mongoose = require("mongoose")

exports.connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            process.env.MONGO_DB_URI
        )
        console.log("Database Conected!")
        console.log(`Database Host: ${connectionInstance.connection.host}`)
        console.log(`Database Name: ${connectionInstance.connection.name}`)
    } catch (error) {
        console.log("Database Not Connected")
    }
}
