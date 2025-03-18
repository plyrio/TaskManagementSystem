"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskRepository = void 0;
const prisma_service_1 = require("../db/prisma.service");
class TaskRepository {
    async create(task) {
        try {
            const taskCreate = await prisma_service_1.prisma.task.create({
                data: task
            });
            return taskCreate;
        }
        catch (error) {
            throw new Error("Failed to create task");
        }
    }
    async findAll() {
        return await prisma_service_1.prisma.task.findMany();
    }
    async findById(id) {
        return await prisma_service_1.prisma.task.findUnique({
            where: { id }
        });
    }
    async update(id, task) {
        return await prisma_service_1.prisma.task.update({
            where: { id },
            data: task
        });
    }
    async delete(id) {
        const deletedTask = await prisma_service_1.prisma.task.delete({
            where: { id }
        });
        return deletedTask ? true : false;
    }
}
exports.TaskRepository = TaskRepository;
//# sourceMappingURL=task.prisma.repository.js.map