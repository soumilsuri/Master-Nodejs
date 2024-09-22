import connectDB from "./db/index.js";

// do this to import dotenv and set it up
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

//calling the connectDB() function we made in db/index.js
connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server is running at port: ${process.env.PORT}`)
        console.log(`http://localhost:${process.env.PORT}`) 
    })
})
.catch((err)=>{ 
    console.log("Mongo DB connection failed !", err)
})