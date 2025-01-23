import {Request, Response} from "express";
import {ITaskService} from "../interfaces/task.service.interface";

export default class TaskController {
  constructor(private readonly taskService: ITaskService) {}
  async createTask(req: Request, res: Response): Promise<any> {
    const task = await this.taskService.createTask(req.body);
    return res.status(201).json(task);
  }

  async getAllTasks(req: Request, res: Response): Promise<any> {
    const tasks = await this.taskService.getAllTasks();
    return res.json(tasks);
  }

  async getTaskById(req: Request, res: Response): Promise<any> {
    const {id: string} = req.body;
    const task = await this.taskService.getTaskById(id);
    return res.json(task)
  }
}
