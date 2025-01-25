import {TaskService} from "../services/task.service";
import {TaskRepository} from "../repositories/task.repository";
import TaskController from "../controllers/task.controller";


export const taskRepository = new TaskRepository();
export const taskService = new TaskService(taskRepository);
export const taskController = new TaskController(taskService);
