import mongoose from "mongoose";

//use type: mongoose.Schema.Types.ObjectId to 
//reference the id of the x document in the x collection using red: "x"
const likesSchema = new mongoose.Schema(
    {
        video : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        },
        user : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        Comment : {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        },
        likedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    }
)

export const likes = mongoose.model("Likes", likesSchema)