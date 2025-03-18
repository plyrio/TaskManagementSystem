import {prisma} from "../db/prisma.service";
import {ITaskRepository} from "../interfaces/task.repository.interface";
import {Task} from "../models/task.model";

export class TaskRepository implements ITaskRepository {
  async create(task): Promise<Task> {
    try {
      const taskCreate = await prisma.task.create({
        data: task
      });
      return taskCreate;
    } catch (error) {
      throw new Error("Failed to create task");
    }
  }

  async findAll(): Promise<Task[]> {
    return await prisma.task.findMany();
  }

  async findById(id: string): Promise<Task | null> {
    return await prisma.task.findUnique({
      where: {id}
    });
  }

  async update(id: string, task: Partial<Task>): Promise<Task | null> {
    return await prisma.task.update({
      where: {id},
      data: task
    });
  }

  async delete(id: string): Promise<boolean> {
    const deletedTask = await prisma.task.delete({
      where: {id}
    });
    return deletedTask ? true : false;
  }
}
