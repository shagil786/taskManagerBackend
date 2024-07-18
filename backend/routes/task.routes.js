import express from 'express'
import { addTask, allUserTasks, deleteTask, editTask } from '../controllers/task.controller.js'
import protectRoute from '../middleware/protectRoute.js'

const router = express.Router()

router.get('/allUserTasks', protectRoute, allUserTasks)
router.post('/add', protectRoute, addTask)
router.post('/edit/:id', protectRoute, editTask)
router.delete('/delete/:id', protectRoute, deleteTask)



export default router