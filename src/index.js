import dotenv from "dotenv";
import connectDB from "./db/index.js";

import express from "express";
import mongoose from "mongoose";

dotenv.config({
    path: './.env'
})

const app = express();

(async () => {
    try {
        await connectDB();
        
        app.on("error", (error) => {
            console.log("ERROR: ", error);
            throw error;
        });

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        });

    } catch (error) {
        console.error("ERROR: ", error);
        throw error;
    }
})();
