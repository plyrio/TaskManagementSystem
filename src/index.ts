require("dotenv").config();
import express, {Request, Response} from "express";
import TaskRouter from "./routes/task.route";
const app = express();
const port = process.env.PORT || 3001;

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

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
