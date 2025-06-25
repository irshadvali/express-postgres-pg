// swaggerOptions.js
export const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Program Management API",
      version: "1.0.0",
      description: "API documentation for the Program Management System",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./server.js"], // Path to your route definitions
};
