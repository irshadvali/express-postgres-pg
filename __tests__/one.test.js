// __tests__/server.test.js

// ✅ Mock Sequelize before importing anything
jest.mock("../dbconnection/dbconnection.js", () => ({
  sequelize: {
    define: jest.fn(() => ({
      findAll: jest.fn(),
      findByPk: jest.fn()
    })),
    close: jest.fn()
  }
}));

// ✅ Now import the mocked Sequelize and app
import { sequelize } from "../dbconnection/dbconnection.js";
import request from "supertest";
import app from "../server.js";

// ✅ Mock the ProgramAttribute model methods
jest.mock("../models/programAttribute.js", () => ({
  ProgramAttribute: {
    findAll: jest.fn(),
    findByPk: jest.fn()
  }
}));

// ✅ Import model after mocking
import { ProgramAttribute } from "../models/programAttribute.js";

afterAll(async () => {
  await sequelize.close();
});

describe("ProgramAttribute API Endpoints", () => {
  test("GET /program_attribute should return all", async () => {
    ProgramAttribute.findAll.mockResolvedValue([
      { id: "1", attribute: "Attr A" }
    ]);

    const res = await request(app).get("/program_attribute");
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: "1", attribute: "Attr A" }]);
  });

  test("GET /program-attributes/:id should return item by ID", async () => {
    ProgramAttribute.findByPk.mockResolvedValue({
      id: "1",
      attribute: "Attr A"
    });

    const res = await request(app).get("/program-attributes/1");
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: "1", attribute: "Attr A" });
  });
});
