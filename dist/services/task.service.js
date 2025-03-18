"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
class TaskService {
    constructor(repository) {
        this.repository = repository;
    }
    async createTask(data) {
        return this.repository.create(data);
    }
    async getAllTasks() {
        return this.repository.findAll();
    }
    async getTaskById(id) {
        return this.repository.findById(id);
    }
    async updateTask(id, data) {
        return this.repository.update(id, data);
    }
    async deleteTask(id) {
        return this.repository.delete(id);
    }
}
exports.TaskService = TaskService;
//# sourceMappingURL=task.service.js.map