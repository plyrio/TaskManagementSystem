import TaskController from "../controllers/task.controller";
import {Router, Request, Response} from "express";
const router = Router();

router.post("/", TaskController.createTask);
router.get("/", TaskController.getAllTasks);

export default router;
