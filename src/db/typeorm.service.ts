import { DataSource } from "typeorm";
import { AppDataSource } from "./typeorm.config";


export const getDataSource = async (): Promise<DataSource> => {
  if (!AppDataSource.isInitialized) {
    await AppDataSource.initialize();
    console.log("TypeORM: Database connection initialized!");
  }
  return AppDataSource;
};