import {prismaService} from "../db/prisma.service";

class TaskRepository {
  async create(data: any) {
    return await prismaService.task.create({data});
  }

  async getAll() {
    return await prismaService.task.findMany({});
  }
}

export default new TaskRepository();
