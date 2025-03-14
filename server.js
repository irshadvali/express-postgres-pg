import dotenv from "dotenv";
dotenv.config();
import express from "express";
import {sequelize} from "./dbconnection/dbconnection.js"
import {Client} from './models/client.js'
import { ProgramMeasure } from './models/programMeasure.js';
import { ProgramScheduleType } from './models/programScheduleType.js';
import { ProgramStatus } from './models/programStatus.js';
import { ProgramSubtype } from './models/programSubtype.js';
import { ProgramTimeframe } from './models/programTimeframe.js';
import { ProgramTimezone } from './models/programTimezone.js';
import { ProgramType } from './models/programType.js';
import { ProgramWeek } from './models/programWeek.js';

const app = express();
app.use(express.json());

// Sync Database
sequelize.sync()
    .then(() => console.log("Database connected!"))
    .catch(err => console.error("Database connection failed:", err));

// Routes
app.get("/clients", async (req, res) => {
    const clients = await Client.findAll();
    res.json(clients);
});
app.get("/clients/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByPk(id);
        if (!client) {
            return res.status(404).json({ error: "Client not found" });
        }
        res.json(client);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch client" });
    }
});
app.post("/clients", async (req, res) => {
    const { name, abberviation, oipdi_client_name } = req.body;
    try {
        const client = await Client.create({ name, abberviation, oipdi_client_name });
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
app.get('/program-measures', async (req, res) => {
    const measures = await ProgramMeasure.findAll();
    res.json(measures);
});

app.get('/program-schedule-types', async (req, res) => {
    const scheduleTypes = await ProgramScheduleType.findAll();
    res.json(scheduleTypes);
});

app.get('/program-statuses', async (req, res) => {
    const statuses = await ProgramStatus.findAll();
    res.json(statuses);
});

app.get('/program-subtypes', async (req, res) => {
    const subtypes = await ProgramSubtype.findAll();
    res.json(subtypes);
});

app.get('/program-timeframes', async (req, res) => {
    const timeframes = await ProgramTimeframe.findAll();
    res.json(timeframes);
});

app.get('/program-timezones', async (req, res) => {
    const timezones = await ProgramTimezone.findAll();
    res.json(timezones);
});

app.get('/program-types', async (req, res) => {
    const types = await ProgramType.findAll();
    res.json(types);
});

app.get('/program-weeks', async (req, res) => {
    const weeks = await ProgramWeek.findAll();
    res.json(weeks);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
