import mongoose from "mongoose"

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`)
    console.log("DB CONNECTED")
  } catch (error) {
    console.log("Error while connecting to DB: ", error)
  }
}

export default connectDB
