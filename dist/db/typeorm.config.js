"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Task_1 = require("../entity/Task");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    url: process.env.DATABASE_URL,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    logging: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    entities: [Task_1.Task]
});
//# sourceMappingURL=typeorm.config.js.map