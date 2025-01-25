import {Router} from "express";
import TaskController from "../controllers/task.controller";

const router = Router();

export default (taskController: TaskController) => {
  /**
   * @swagger
   * /task:
   *   post:
   *     summary: Create a new task
   *     description: Create a new task with a title and description.
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *               description:
   *                 type: string
   *     responses:
   *       201:
   *         description: Task created
   *         content:
   *           application/json:
   *             example:
   *               {
   *                 "id": "6793bf54f094016cfcab17bc",
   *                 "title": "New Task",
   *                 "description": "Description of the new Task",
   *                 "completed": false,
   *                 "createdAt": "2025-01-24T16:27:00.133Z",
   *                 "updatedAt": "2025-01-24T16:27:00.133Z"
   *               }
   */
  router.post("/", taskController.createTask.bind(taskController));

  /**
   * @swagger
   * /task:
   *   get:
   *     summary: Get all tasks
   *     description: Retrieve a list of all tasks.
   *     responses:
   *       200:
   *         description: A list of tasks.
   *         content:
   *           application/json:
   *             example: [
   *               {
   *                 "id": "6793bf54f094016cfcab17bc",
   *                 "title": "Task 1",
   *                 "description": "Description of the task 1",
   *                 "completed": false,
   *                 "createdAt": "2025-01-24T16:27:00.133Z",
   *                 "updatedAt": "2025-01-24T16:27:00.133Z"
   *               },
   *               {
   *                 "id": "6793bf54f094016cfcab17bc",
   *                 "title": "Task 2",
   *                 "description": "Description of the task 2",
   *                 "completed": true,
   *                 "createdAt": "2025-01-24T16:27:00.133Z",
   *                 "updatedAt": "2025-01-24T16:27:00.133Z"
   *               }
   *             ]
   */
  router.get("/", taskController.getAllTasks.bind(taskController));

  /**
   * @swagger
   * /task/{id}:
   *   get:
   *     summary: Get a task by ID
   *     description: Retrieve details of a task by its ID.
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: The ID of the task to retrieve.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Task details.
   *         content:
   *           application/json:
   *             example:
   *               {
   *                 "id": "6793bf54f094016cfcab17bc",
   *                 "title": "Task",
   *                 "description": "Description of the task",
   *                 "completed": false,
   *                 "createdAt": "2025-01-24T16:27:00.133Z",
   *                 "updatedAt": "2025-01-24T16:27:00.133Z"
   *               }
   */
  router.get("/:id", taskController.getTaskById.bind(taskController));

  /**
   * @swagger
   * /task/{id}:
   *   patch:
   *     summary: Update a task by ID
   *     description: Update the details of a task.
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: The ID of the task to update.
   *         schema:
   *           type: string
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             properties:
   *               title:
   *                 type: string
   *               description:
   *                 type: string
   *               completed:
   *                 type: boolean
   *     responses:
   *       200:
   *         description: Updated task details.
   *         content:
   *           application/json:
   *             example:
   *               {
   *                 "id": "6793bf54f094016cfcab17bc",
   *                 "title": "Updated Task",
   *                 "description": "Description of the task updated",
   *                 "completed": true,
   *                 "createdAt": "2025-01-24T16:27:00.133Z",
   *                 "updatedAt": "2025-01-25T06:46:00.110Z"
   *               }
   */
  router.patch("/:id", taskController.updateTask.bind(taskController));

  /**
   * @swagger
   * /task/{id}:
   *   delete:
   *     summary: Delete a task by ID
   *     description: Delete a task by its ID.
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: The ID of the task to delete.
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Task deleted.
   *         content:
   *           application/json:
   *             example: { "message": "Task deleted successfully" }
   */
  router.delete("/:id", taskController.deleteTask.bind(taskController));

  return router;
};
