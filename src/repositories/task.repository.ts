import {getDataSource} from "../db/typeorm.service";
import {ITaskRepository} from "../interfaces/task.repository.interface";
import {Task as EntityTask} from "../entity/Task";
import {Task as ModelTask} from "../models/task.model";
import {ObjectId} from "mongodb";

export class TaskRepository implements ITaskRepository {
  private async getRepository() {
    const dataSource = await getDataSource();
    return dataSource.getMongoRepository(EntityTask); 
  }

  
  async create(task: Partial<ModelTask>): Promise<ModelTask> {
    try {
      const repository = await this.getRepository(); 
      const savedTask = await repository.save(task);
      return savedTask;
    } catch (error: any) {
      console.error("Error creating task:", error.message);
      throw new Error("Failed to create task.");
    }
  }

  async findAll(): Promise<ModelTask[]> {
    try {
      const repository = await this.getRepository();
      const tasks = await repository.find();
      return tasks;
    } catch (error: any) {
      console.error("Error retrieving tasks:", error.message);
      throw new Error("Failed to retrieve tasks.");
    }
  }

  async findById(id: string): Promise<ModelTask | null> {
    try {
      const repository = await this.getRepository();
      const _id = new ObjectId(id);
      const task = await repository.findOne({where: {_id}});
      return task || null;
    } catch (error: any) {
      console.error("Error retrieving task by id:", error.message);
      throw new Error("Failed to retrieve task by id.");
    }
  }


  async update(
    id: string,
    task: Partial<ModelTask>
  ): Promise<ModelTask | null> {
    try {
      const repository = await this.getRepository();
      const existingTask = await this.findById(id);
      if (!existingTask) return null;

      await repository.update({id}, task);
      return {...existingTask, ...task};
    } catch (error: any) {
      console.error("Error updating task:", error.message);
      throw new Error("Failed to update task.");
    }
  }

  async delete(id: string): Promise<boolean> {
    try {
      const repository = await this.getRepository();
      const result = await repository.delete({id});
      return result.affected ? true : false;
    } catch (error: any) {
      console.error("Error deleting task:", error.message);
      throw new Error("Failed to delete task.");
    }
  }
}
