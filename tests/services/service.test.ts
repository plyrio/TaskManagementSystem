import { TaskService } from "../../src/services/task.service";
import { ITaskRepository } from "../../src/interfaces/task.repository.interface";
import { Task } from "../../src/models/task.model";
import { jest, describe, it } from "@jest/globals";

describe("TaskService", () => {
  let mockRepository: jest.Mocked<ITaskRepository>;
  let taskService: TaskService;

  beforeEach(() => {
    // Criando um mock do repositório com a interface
    mockRepository = {
      create: jest.fn(),
      findAll: jest.fn(),
      findById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    taskService = new TaskService(mockRepository);
  });

  it("should create a task", async () => {
    const mockTask: Task = {
      id: "123",
      title: "Test Task",
      description: "Test Description",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    mockRepository.create.mockResolvedValue(mockTask);

    const result = await taskService.createTask({
      title: "Test Task",
      description: "Test Description",
    });

    expect(mockRepository.create).toHaveBeenCalledWith({
      title: "Test Task",
      description: "Test Description",
    });
    expect(result).toEqual(mockTask);
  });

  it("should get all tasks", async () => {
    const mockTasks: Task[] = [
      {
        id: "123",
        title: "Task 1",
        description: "Description 1",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ];

    mockRepository.findAll.mockResolvedValue(mockTasks);

    const result = await taskService.getAllTasks();

    expect(mockRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(mockTasks);
  });
});