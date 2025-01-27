import {describe, expect, it, jest, beforeAll, afterAll} from "@jest/globals";
import request from "supertest";
import app from "../../src/app";
import {TaskRepository} from "../../src/repositories/task.repository";

jest.mock("../../src/repositories/task.repository");

const mockTaskRepository = TaskRepository as jest.MockedClass<
  typeof TaskRepository
>;

let server: any;

beforeAll(() => {
  server = app.listen(4000);
});

afterAll(() => {
  server.close();
});

describe("Task API", () => {
  it("should create a new task", async () => {
    const newTask = {
      title: "Test Task",
      description: "Test Description"
    };

    const mockCreatedTask = {
      id: "123",
      title: "Test Task",
      description: "Test Description",
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    mockTaskRepository.prototype.create.mockResolvedValue(mockCreatedTask);

    const response = await request(server).post("/task").send(newTask);

    expect(response.status).toBe(201);
    expect(response.body.title).toBe("Test Task");
    expect(response.body.description).toBe("Test Description");
    expect(response.body.id).toBeDefined();
    expect(response.body.completed).toBe(false);
  });

  it("should return all tasks", async () => {
    const mockTasks = [
      {
        id: "123",
        title: "Test Task 1",
        description: "Test Description 1",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    mockTaskRepository.prototype.findAll.mockResolvedValue(mockTasks);

    const response = await request(server).get("/task");

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body[0].title).toBe("Test Task 1");
  });
});
