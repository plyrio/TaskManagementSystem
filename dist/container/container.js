"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskController = exports.taskService = exports.taskRepository = void 0;
const task_service_1 = require("../services/task.service");
const task_repository_1 = require("../repositories/task.repository");
const task_controller_1 = __importDefault(require("../controllers/task.controller"));
exports.taskRepository = new task_repository_1.TaskRepository();
exports.taskService = new task_service_1.TaskService(exports.taskRepository);
exports.taskController = new task_controller_1.default(exports.taskService);
//# sourceMappingURL=container.js.map