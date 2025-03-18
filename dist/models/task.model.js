"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    constructor() {
        this.id = "";
        this.title = "";
        this.description = "";
        this.completed = false;
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }
}
exports.Task = Task;
//# sourceMappingURL=task.model.js.map