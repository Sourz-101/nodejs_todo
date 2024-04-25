import express from "express";
import { app } from "./app.js";
import { connectDB } from "./data/database.js";


connectDB();



// Server Listner
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port: ${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
})

