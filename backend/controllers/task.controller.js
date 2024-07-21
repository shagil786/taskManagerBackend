import Task from "../models/task.model.js";

export const addTask = async (req, res) => {

    try {
        const { title, description, taskProgress } = req.body

        if(!req.user){
            return res.status(401).json({
                error: "Unauthorise User.."
            })
        }

        if(!title ){
            return res.status(400).json({
                error: "Data Missing.."
            })
        }

        const newTask = new Task({
            title,
            description,
            userId: req.user._id,
            taskProgress
        })

        await newTask.save()
        return res.status(201).json({
            message : 'Task Added Successfully',
            data:newTask
        })
        
    } catch (error) {
        console.log("Error in add Task: ", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
        
    }
}

export const editTask = async (req, res) => {

    try {
        // id for edit request of the task
        // req.user will check ki that particular user can edit it or not
        const { id } = req.params

        const task = await Task.findById(id)

        if(!task){
            return res.status(404).json({
                error: "Task not found"
            })
        }

        if(task.userId.toString() !== req.user._id.toString()) {
            return res.status(403).json({
                error: "You are not authorised to edit"
            })
        }

        const updatedTask = req.body
        // Only to update the required data that is being send via request
        Object.assign(task, updatedTask)

        await task.save()

        res.status(200).json({
            message: "Task updated successfully",
            data: task
        })
    } catch (error) {
        console.log("Error in edit Task: ", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const deleteTask = async (req, res) => {
    try {
        const {id} = req.params

        const task = await Task.findById(id)

        if(!task){
            return res.status(400).json({
                error: "Task not found"
            })
        }

        if(task.userId.toString() !== req.user._id.toString()){
            return res.status(403).json({
                error: "You are not authorised to delete"
            })
        }

        await task.deleteOne()

        return res.status(200).json({
            message: "Task deleted"
        })
    } catch (error) {
        console.log("Error in delete Task: ", error.message);
        res.status(500).json({
            error: "Internal Server Error"
        })
    }
}

export const allUserTasks = async (req, res) => {
    try {
        const userId = req.user._id

        const tasks = await Task.find({userId})

        return res.status(200).json(tasks)

    } catch (error) {
        console.log("Error in fetching user tasks: ", error.message)
        res.status(500).json({ 
            error: "Internal Server Error" 
        })
    }
}