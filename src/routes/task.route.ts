import {Router} from "express";
import TaskController from "../controllers/task.controller";

const router = Router();

export default (taskController: TaskController) => {
  router.post("/", taskController.createTask.bind(taskController));
  router.get("/", taskController.getAllTasks.bind(taskController));
  return router;
};