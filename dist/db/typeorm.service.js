"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataSource = void 0;
const typeorm_config_1 = require("./typeorm.config");
const getDataSource = async () => {
    if (!typeorm_config_1.AppDataSource.isInitialized) {
        await typeorm_config_1.AppDataSource.initialize()
            .then(() => {
            console.log("Database connected!!");
        })
            .catch((err) => {
            console.error("Error to connect database:", err);
        });
    }
    return typeorm_config_1.AppDataSource;
};
exports.getDataSource = getDataSource;
//# sourceMappingURL=typeorm.service.js.map