import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"


import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import connection from "./db/connection.js"

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000


app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", authRoutes)
app.use("/api/task", taskRoutes)


app.get("/", (req, res) => {
    res.send("Server is online......")
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connection()
})