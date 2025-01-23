import TaskController from "../controllers/task.controller";
import {TaskService} from "../services/task.service";
import {TaskRepository} from "../repositories/task.repository";
import {Router, Request, Response} from "express";

const router = Router();

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);

export default router;
