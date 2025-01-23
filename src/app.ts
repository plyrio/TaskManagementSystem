import express, {Request, Response} from "express";
import TaskRouter from "./routes/task.route";
const app = express();
const port = process.env.PORT || 3001;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");
import {TaskService} from "./services/task.service";
import {TaskRepository} from "./repositories/task.repository";

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);

app.use(
  express.urlencoded({
    extended: true
  })
);
app.use(express.json());

app.use("/task", TaskRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({message: "API Rest de Gerenciamento de Tarefas!"});
});

export default app;
