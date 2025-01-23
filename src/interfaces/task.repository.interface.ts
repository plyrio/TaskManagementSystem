import {Task} from "../models/task.model";

export interface ITaskRepository {
  create(task: Partial<Task>): Promise<Task>;
  findAll(): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  update(id: string, task: Partial<Task>): Promise<Task | null>;
  delete(id: string): Promise<boolean>;
}
