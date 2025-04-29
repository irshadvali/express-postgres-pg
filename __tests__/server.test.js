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
import { ProgramStatus } from '../models/programStatus.js';
jest.mock('../models/programStatus.js');
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

// CLIENT
describe('Client API Endpoints', () => {
  test('GET /api/clients should return all clients', async () => {
    const mockClients = [
      { id: '1', name: 'Client A', abberviation: 'CA', oipdi_client_name: 'OIPDI A' },
      { id: '2', name: 'Client B', abberviation: 'CB', oipdi_client_name: 'OIPDI B' }
    ];
    Client.findAll.mockResolvedValue(mockClients);
    const res = await request(app).get('/api/clients');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockClients);
  });

  test('GET /api/clients/:id should return a client by ID', async () => {
    const mockClient = { id: '1', name: 'Client A', abberviation: 'CA', oipdi_client_name: 'OIPDI A' };
    Client.findByPk.mockResolvedValue(mockClient);
    const res = await request(app).get('/api/clients/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual(mockClient);
  });

  test('GET /api/clients/:id should return 404 if not found', async () => {
    Client.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/clients/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'Client not found' });
  });
});

// PROGRAM ATTRIBUTE
describe('ProgramAttribute API Endpoints', () => {
  test('GET /api/program-attributes should return all', async () => {
    ProgramAttribute.findAll.mockResolvedValue([{ id: '1', attribute: 'Attr A' }]);
    const res = await request(app).get('/api/program-attributes');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', attribute: 'Attr A' }]);
  });

  test('GET /api/program-attributes/:id should return item by ID', async () => {
    ProgramAttribute.findByPk.mockResolvedValue({ id: '1', attribute: 'Attr A' });
    const res = await request(app).get('/api/program-attributes/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', attribute: 'Attr A' });
  });

  test('GET /api/program-attributes/:id should return 404 if not found', async () => {
    ProgramAttribute.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/program-attributes/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'ProgramAttribute not found' });
  });
});

// PROGRAM SCHEDULE TYPE
describe('ProgramScheduleType API Endpoints', () => {
  test('GET /api/program-schedule-types should return all', async () => {
    ProgramScheduleType.findAll.mockResolvedValue([{ id: '1', type: 'Daily', is_default: true }]);
    const res = await request(app).get('/api/program-schedule-types');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', type: 'Daily', is_default: true }]);
  });

  test('GET /api/program-schedule-types/:id should return item by ID', async () => {
    ProgramScheduleType.findByPk.mockResolvedValue({ id: '1', type: 'Daily', is_default: true });
    const res = await request(app).get('/api/program-schedule-types/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', type: 'Daily', is_default: true });
  });

  test('GET /api/program-schedule-types/:id should return 404 if not found', async () => {
    ProgramScheduleType.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/program-schedule-types/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'ProgramScheduleType not found' });
  });
});

// PROGRAM LANGUAGE
describe('ProgramLanguage API Endpoints', () => {
  test('GET /api/program-languages should return all', async () => {
    ProgramLanguage.findAll.mockResolvedValue([{ id: '1', language: 'English', is_default: false }]);
    const res = await request(app).get('/api/program-languages');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', language: 'English', is_default: false }]);
  });

  test('GET /api/program-languages/:id should return item by ID', async () => {
    ProgramLanguage.findByPk.mockResolvedValue({ id: '1', language: 'English', is_default: false });
    const res = await request(app).get('/api/program-languages/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', language: 'English', is_default: false });
  });

  test('GET /api/program-languages/:id should return 404 if not found', async () => {
    ProgramLanguage.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/program-languages/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'ProgramLanguage not found' });
  });
});

// PROGRAM CHANNEL
describe('ProgramChannel API Endpoints', () => {
  test('GET /api/program-channels should return all', async () => {
    ProgramChannel.findAll.mockResolvedValue([{ id: '1', channel: 'TV' }]);
    const res = await request(app).get('/api/program-channels');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', channel: 'TV' }]);
  });

  test('GET /api/program-channels/:id should return item by ID', async () => {
    ProgramChannel.findByPk.mockResolvedValue({ id: '1', channel: 'TV' });
    const res = await request(app).get('/api/program-channels/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', channel: 'TV' });
  });

  test('GET /api/program-channels/:id should return 404 if not found', async () => {
    ProgramChannel.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/program-channels/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'ProgramChannel not found' });
  });
});

// PROGRAM MEASURE
describe('ProgramMeasure API Endpoints', () => {
  test('GET /api/program-measures should return all', async () => {
    ProgramMeasure.findAll.mockResolvedValue([{ id: '1', measure_name: 'Reach' }]);
    const res = await request(app).get('/api/program-measures');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', measure_name: 'Reach' }]);
  });

  test('GET /api/program-measures/:id should return item by ID', async () => {
    ProgramMeasure.findByPk.mockResolvedValue({ id: '1', measure_name: 'Reach' });
    const res = await request(app).get('/api/program-measures/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', measure_name: 'Reach' });
  });

  test('GET /api/program-measures/:id should return 404 if not found', async () => {
    ProgramMeasure.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/program-measures/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'ProgramMeasure not found' });
  });
});

// PROGRAM TIMEFRAME
describe('ProgramTimeframe API Endpoints', () => {
  test('GET /api/program-timeframes should return all', async () => {
    ProgramTimeframe.findAll.mockResolvedValue([{ id: '1', timeframe: 'Q1' }]);
    const res = await request(app).get('/api/program-timeframes');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', timeframe: 'Q1' }]);
  });

  test('GET /api/program-timeframes/:id should return item by ID', async () => {
    ProgramTimeframe.findByPk.mockResolvedValue({ id: '1', timeframe: 'Q1' });
    const res = await request(app).get('/api/program-timeframes/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', timeframe: 'Q1' });
  });

  test('GET /api/program-timeframes/:id should return 404 if not found', async () => {
    ProgramTimeframe.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/program-timeframes/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'ProgramTimeframe not found' });
  });
});

// PROGRAM WEEK
describe('ProgramWeek API Endpoints', () => {
  test('GET /api/program-weeks should return all', async () => {
    ProgramWeek.findAll.mockResolvedValue([{ id: '1', week_day: 'Monday' }]);
    const res = await request(app).get('/api/program-weeks');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', week_day: 'Monday' }]);
  });

  test('GET /api/program-weeks/:id should return item by ID', async () => {
    ProgramWeek.findByPk.mockResolvedValue({ id: '1', week_day: 'Monday' });
    const res = await request(app).get('/api/program-weeks/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', week_day: 'Monday' });
  });

  test('GET /api/program-weeks/:id should return 404 if not found', async () => {
    ProgramWeek.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/program-weeks/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'ProgramWeek not found' });
  });


  // PROGRAM STATUS
describe('ProgramStatus API Endpoints', () => {
  test('GET /api/program-statuses should return all', async () => {
    ProgramStatus.findAll.mockResolvedValue([{ id: '1', status: 'Active' }]);
    const res = await request(app).get('/api/program-statuses');
    expect(res.status).toBe(200);
    expect(res.body).toEqual([{ id: '1', status: 'Active' }]);
  });

  test('GET /api/program-statuses/:id should return item by ID', async () => {
    ProgramStatus.findByPk.mockResolvedValue({ id: '1', status: 'Active' });
    const res = await request(app).get('/api/program-statuses/1');
    expect(res.status).toBe(200);
    expect(res.body).toEqual({ id: '1', status: 'Active' });
  });

  test('GET /api/program-statuses/:id should return 404 if not found', async () => {
    ProgramStatus.findByPk.mockResolvedValue(null);
    const res = await request(app).get('/api/program-statuses/999');
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: 'ProgramStatus not found' });
  });
});

});
