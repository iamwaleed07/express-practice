import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"
import connectDB from "./src/config/db.config.js"

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json({ limit: "10kb" }))
app.use(cookieParser())
app.use(
  cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

app.get("/", (req, res) => {
  res.json({
    message: "HELLO",
  })
})

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Sever is listening on port ${PORT}`)
    })
  })
  .catch(() => {
    console.log("Error")
  })
