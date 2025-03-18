import {Task} from "../models/task.model";
import {ITaskRepository} from "../interfaces/task.repository.interface";
import {ITaskService} from "../interfaces/task.service.interface";

export class TaskService implements ITaskService {
  constructor(private readonly repository: ITaskRepository) {}

  async createTask(data: Task): Promise<Task> {
    return this.repository.create(data);
  }

  async getAllTasks(): Promise<Task[]> {
    return this.repository.findAll();
  }

  async getTaskById(id: string): Promise<Task | null> {
    return this.repository.findById(id);
  }

  async updateTask(id: string, data: Partial<Task>): Promise<Task | null> {
    return this.repository.update(id, data);
  }

  async deleteTask(id: string): Promise<boolean> {
    return this.repository.delete(id);
  }
}
