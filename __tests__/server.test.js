import request from 'supertest';
import app from '../server.js'; // ✅ Should point to Express app instance
import { Client } from '../models/client.js';
import { sequelize } from '../dbconnection/dbconnection.js';

jest.mock('../models/client.js');

describe('Client API Endpoints', () => {
  afterAll(async () => {
    await sequelize.close();
  });

  test('GET /clients should return all clients', async () => {
    const mockClients = [
      { id: '1', name: 'Client A', abberviation: 'CA', oipdi_client_name: 'OIPDI A' },
      { id: '2', name: 'Client B', abberviation: 'CB', oipdi_client_name: 'OIPDI B' }
    ];

    Client.findAll.mockResolvedValue(mockClients);

    const response = await request(app).get('/clients');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockClients);
  });

  test('GET /clients/:id should return a client by ID', async () => {
    const mockClient = { id: '1', name: 'Client A', abberviation: 'CA', oipdi_client_name: 'OIPDI A' };

    Client.findByPk.mockResolvedValue(mockClient);

    const response = await request(app).get('/clients/1');

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockClient);
  });

  test('GET /clients/:id should return 404 if client not found', async () => {
    Client.findByPk.mockResolvedValue(null);

    const response = await request(app).get('/clients/999');

    expect(response.status).toBe(404);
    expect(response.body).toEqual({ error: "Client not found" });
  });
});
