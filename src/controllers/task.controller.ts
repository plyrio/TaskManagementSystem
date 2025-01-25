import {Request, Response} from "express";
import {ITaskService} from "../interfaces/task.service.interface";
import {Task} from "../models/task.model";

export default class TaskController {
  constructor(private readonly taskService: ITaskService) {}
  async createTask(req: Request, res: Response): Promise<Response> {
    const task = await this.taskService.createTask(req.body);
    return res.status(201).json(task);
  }

  async getAllTasks(req: Request, res: Response): Promise<Response> {
    const tasks = await this.taskService.getAllTasks();
    return res.json(tasks);
  }

  async getTaskById(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const task = await this.taskService.getTaskById(id);
    return res.json(task);
  }

  async updateTask(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const updateData = req.body
    const task = await this.taskService.updateTask(id, updateData);
    return res.json(task);
  }
  
  async deleteTask(req: Request, res: Response): Promise<Response> {
    const {id} = req.params;
    const task = await this.taskService.deleteTask(id);
    return res.json(task);
  }
}
