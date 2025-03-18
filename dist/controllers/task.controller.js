"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TaskController {
    constructor(taskService) {
        this.taskService = taskService;
    }
    async createTask(req, res) {
        const task = await this.taskService.createTask(req.body);
        return res.status(201).json(task);
    }
    async getAllTasks(req, res) {
        const tasks = await this.taskService.getAllTasks();
        return res.json(tasks);
    }
    async getTaskById(req, res) {
        const { id } = req.params;
        const task = await this.taskService.getTaskById(id);
        return res.json(task);
    }
    async updateTask(req, res) {
        const { id } = req.params;
        const updateData = req.body;
        const task = await this.taskService.updateTask(id, updateData);
        return res.json(task);
    }
    async deleteTask(req, res) {
        const { id } = req.params;
        const task = await this.taskService.deleteTask(id);
        return res.json(task);
    }
}
exports.default = TaskController;
//# sourceMappingURL=task.controller.js.map