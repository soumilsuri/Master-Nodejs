import mongoose from "mongoose";
// import { DB_NAME } from "../constants.js";
// const DB_NAME = process.env.DB_NAME

const DB_NAME = "masterNodeJs";

//function for connection of mongodb data base
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
    }
}

export default connectDB
// process.env.MONGODB_URI is an env variable which is stored in .env file