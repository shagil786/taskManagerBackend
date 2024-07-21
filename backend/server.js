import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import path from 'path'


import authRoutes from './routes/auth.routes.js'
import taskRoutes from './routes/task.routes.js'
import connection from "./db/connection.js"
import cors from "cors"

const app = express()

dotenv.config()

const PORT = process.env.PORT || 5000

const __dirname = path.resolve()


app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true,
}));

app.use("/api/auth", authRoutes)
app.use("/api/task", taskRoutes)


app.use(express.static(path.join(__dirname, "/frontend/dist")))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connection()
})