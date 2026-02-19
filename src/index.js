import mongoose from "mongoose";
import { DB_NAME } from "..constantjs";

const connectDB = async () => {
    try {
        const connetionInstance = await mongoose.connect(`${process.env.MONGODB_URI}${DB_NAME}`);
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connectionhost}`);
    } catch (error) {
        console.log("MONGODB connection FAILED !!", error);
        process.exit(1);
    }
}


export { connectDB };