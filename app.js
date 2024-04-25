import express from "express";
import userRouter from './routes/user.js'
import taskRouter from './routes/task.js'
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors"

export const app = express();

dotenv.config({
    path: './.env'
})
// USING MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));

// Using Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/task", taskRouter)




// GET REQUESTS
app.get("/", (req, res) => {
    res.send("Working");
})

// USING MIDDLEWARE FOR ERROR HANDLING
app.use(errorMiddleware)
