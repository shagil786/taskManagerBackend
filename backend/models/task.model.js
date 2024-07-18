import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type:String,
        required: true,
    },
    userId: { // the one making the task
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    taskProgress :{
        type: String,
        enum: ["todo", "inprogress", "done"],
        default: "todo",
    },
}, {timestamps: true})

const Task = mongoose.model("Task", taskSchema)

export default Task