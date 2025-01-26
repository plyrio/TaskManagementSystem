import TaskController from "../../src/controllers/task.controller";
import {Request, Response} from "express";
import {Task} from "../../src/models/task.model";
import {ITaskService} from "../../src/interfaces/task.service.interface";
import {jest, describe, it} from "@jest/globals";

describe("TaskController", () => {
  let mockService: jest.Mocked<ITaskService>;
  let taskController: TaskController;
  let mockResponse: Response;

  beforeEach(() => {
    // Criando um mock do serviço com a interface
    mockService = {
      createTask: jest.fn(),
      getAllTasks: jest.fn(),
      getTaskById: jest.fn(),
      updateTask: jest.fn(),
      deleteTask: jest.fn()
    };

    taskController = new TaskController(mockService);

    // Mockando o objeto Response
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis()
    } as unknown as Response;
  });

  it("should create a task", async () => {
    const mockTask: Task = {
      id: "123",
      title: "Test Task",
      description: "Test Description",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const mockRequest = {
      body: {
        title: "Test Task",
        description: "Test Description"
      }
    } as Request;

    mockService.createTask.mockResolvedValue(mockTask);

    await taskController.createTask(mockRequest, mockResponse);

    expect(mockService.createTask).toHaveBeenCalledWith(mockRequest.body);
    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith(mockTask);
  });
});
