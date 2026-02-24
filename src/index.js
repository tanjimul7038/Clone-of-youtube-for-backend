//require("dotenv").config();
import dotenv from "dotenv";
import connectDB from "./db/index.js"; 
dotenv.config({
    path: "./.env"
});
connectDB();


//import mongoose from "mongoose";
// import { DB_NAME } from "..constantjs";
// const connectDB = async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGO_URI}${DB_NAME}`);
//         // const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
//         // console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
//     } catch (error) {
//         console.log("ERROR:", error);
//         throw error;
//     }
// }


// export { connectDB };