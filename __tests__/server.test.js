import request from 'supertest';
import app from '../server.js';
import { sequelize } from '../dbconnection/dbconnection.js';

import { Client } from '../models/client.js';
import { ProgramAttribute } from '../models/programAttribute.js';
import { ProgramScheduleType } from '../models/programScheduleType.js';
import { ProgramLanguage } from '../models/programLanguage.js';
import { ProgramChannel } from '../models/programChannel.js';
import { ProgramMeasure } from '../models/programMeasure.js';
import { ProgramTimeframe } from '../models/programTimeframe.js';
import { ProgramWeek } from '../models/programWeek.js';

jest.mock('../models/client.js');
jest.mock('../models/programAttribute.js');
jest.mock('../models/programScheduleType.js');
jest.mock('../models/programLanguage.js');
jest.mock('../models/programChannel.js');
jest.mock('../models/programMeasure.js');
jest.mock('../models/programTimeframe.js');
jest.mock('../models/programWeek.js');

afterAll(async () => {
  await sequelize.close();
});

describe('Client API Endpoints', () => {
  test('GET /clients should return all clients', async () => {
    const mockClients = [
      { id: '1', name: 'Client A', abberviation: 'CA', oipdi_client_name: 'OIPDI A' },
      { id: '2', name: 'Client B', abberviation: 'CB', oipdi_client_name: 'OIPDI B' }
    ];
    Client.findAll.mockResolvedValue(mockClients);
    const res = await request(app).get('/api/clients');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockClients);
  });

  test('GET /clients/:id should return a client by ID', async () => {
    const mockClient = { id: '1', name: 'Client A', abberviation: 'CA', oipdi_client_name: 'OIPDI A' };
    Client.findByPk.mockResolvedValue(mockClient);
    const res = await request(app).get('/api/clients/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockClient);
  });

  test('GET /clients/:id should return 404 if not found', async () => {
    Client.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/clients/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "Client not found" });
  });
});

const modelTests = [
  {
    name: 'ProgramAttribute',
    path: 'program-attributes',
    model: ProgramAttribute,
    mockItem: { id: '1', attribute: 'Attr A' }
  },
  {
    name: 'ProgramScheduleType',
    path: 'program-schedule-types',
    model: ProgramScheduleType,
    mockItem: { id: '1', type: 'Daily', is_default: true }
  },
  {
    name: 'ProgramLanguage',
    path: 'program-languages',
    model: ProgramLanguage,
    mockItem: { id: '1', language: 'English', is_default: false }
  },
  {
    name: 'ProgramChannel',
    path: 'program-channels',
    model: ProgramChannel,
    mockItem: { id: '1', channel: 'TV' }
  },
  {
    name: 'ProgramMeasure',
    path: 'program-measures',
    model: ProgramMeasure,
    mockItem: { id: '1', measure_name: 'Reach' }
  },
  {
    name: 'ProgramTimeframe',
    path: 'program-timeframes',
    model: ProgramTimeframe,
    mockItem: { id: '1', timeframe: 'Q1' }
  },
  {
    name: 'ProgramWeek',
    path: 'program-weeks',
    model: ProgramWeek,
    mockItem: { id: '1', week_day: 'Monday' }
  }
];

modelTests.forEach(({ name, path, model, mockItem }) => {
  describe(`${name} API Endpoints`, () => {
    test(`GET /${path} should return all`, async () => {
      model.findAll.mockResolvedValue([mockItem]);
      const res = await request(app).get(`/api/${path}`);
      expect(res.status).toBe(200);
      expect(res.body).toEqual([mockItem]);
    });

    test(`GET /${path}/:id should return item by ID`, async () => {
      model.findByPk.mockResolvedValue(mockItem);
      const res = await request(app).get(`/api/${path}/1`);
      expect(res.status).toBe(200);
      expect(res.body).toEqual(mockItem);
    });

    test(`GET /${path}/:id should return 404 if not found`, async () => {
      model.findByPk.mockResolvedValue(null);
      const res = await request(app).get(`/api/${path}/999`);
      expect(res.status).toBe(404);
      expect(res.body).toEqual({ error: `${name} not found` });
    });
  });
});
