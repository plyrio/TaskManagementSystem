"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.default = (taskController) => {
    router.post("/", taskController.createTask.bind(taskController));
    router.get("/", taskController.getAllTasks.bind(taskController));
    router.get("/:id", taskController.getTaskById.bind(taskController));
    router.patch("/:id", taskController.updateTask.bind(taskController));
    router.delete("/:id", taskController.deleteTask.bind(taskController));
    return router;
};
//# sourceMappingURL=task.route.js.map