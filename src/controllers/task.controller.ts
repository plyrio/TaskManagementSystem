import {Request, Response} from "express";
import TaskService from "../services/task.service";

class TaskController {
  async createTask(req: Request, res: Response): Promise<any> {
    const task = await TaskService.create(req.body);
    return res.status(201).json(task);
  }

  async getAllTasks(req: Request, res: Response): Promise<any> {
    const tasks = await TaskService.getAll();
    return res.json(tasks);
  }
}

export default new TaskController();
