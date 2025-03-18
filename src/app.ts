import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import TaskRouter from "./routes/task.route";
import { taskController } from "./container/container";

const app = express();
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
      },
      {
        url: "https://taskmanagementsystem-z9kk.onrender.com/",
        description: "Render Deployed Server"
      },
    ]
  },
  apis: ["./src/routes/**/*.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/task", TaskRouter(taskController));

app.get("/", (req, res) => {
  res.json({ message: "Rest API to manage tasks!" });
});

export default app;