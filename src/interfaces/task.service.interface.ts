import {Task} from "../models/task.model";

export interface ITaskService {
  createTask(data: Partial<Task>): Promise<Task>;
  getAllTasks(): Promise<Task[]>;
  getTaskById(id: string): Promise<Task | null>;
  updateTask(id: string, data: Partial<Task>): Promise<Task | null>;
  deleteTask(id: string): Promise<boolean>;
}
