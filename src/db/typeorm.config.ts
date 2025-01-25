import "reflect-metadata";
import "dotenv/config";
import {DataSource} from "typeorm";
import {Task} from "../entity/Task";

export const AppDataSource = new DataSource({
  type: "mongodb",
  url: process.env.DATABASE_URL,
  database: "TaskDB",
  synchronize: true,
  logging: false,
  entities: [Task],
  migrations: [],
  subscribers: []
});
