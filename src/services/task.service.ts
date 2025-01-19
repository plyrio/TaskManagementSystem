import TaskRepository from "../repositories/task.repository";

class TaskService {
  async create(data: any) {
    return await TaskRepository.create({data});
  }

  async getAll() {
    return await TaskRepository.getAll();
  }
}

export default new TaskService();
