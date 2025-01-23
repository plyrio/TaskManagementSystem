import express, {Request, Response} from "express";
import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json";
import TaskRouter from "./routes/task.route";
import {TaskService} from "./services/task.service";
import {TaskRepository} from "./repositories/task.repository";
import TaskController from "./controllers/task.controller";

const app = express();
const port = process.env.PORT || 3001;

const taskRepository = new TaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/task", TaskRouter(taskController));

app.get("/", (req: Request, res: Response) => {
  res.json({message: "API Rest de Gerenciamento de Tarefas!"});
});

export default app;