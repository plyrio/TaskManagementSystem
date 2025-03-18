"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const task_route_1 = __importDefault(require("./routes/task.route"));
const container_1 = require("./container/container");
const app = (0, express_1.default)();
const port = process.env.PORT || 3001;
const swaggerOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Task API",
            version: "1.0.0",
            description: "API to manage tasks"
        },
        servers: [
            {
                url: "http://localhost:3001",
                description: "Local server"
            }
        ]
    },
    apis: ["./src/routes/**/*.ts"]
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use("/api", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/task", (0, task_route_1.default)(container_1.taskController));
app.get("/", (req, res) => {
    res.json({ message: "Rest API to manage tasks!" });
});
exports.default = app;
//# sourceMappingURL=app.js.map