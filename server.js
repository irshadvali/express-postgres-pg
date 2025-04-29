import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { sequelize } from "./dbconnection/dbconnection.js";
import { Client } from "./models/client.js";
import { ProgramAttribute } from "./models/programAttribute.js";
import { ProgramScheduleType } from "./models/programScheduleType.js";
import { ProgramLanguage } from "./models/programLanguage.js";
import { ProgramChannel } from "./models/programChannel.js";
import { ProgramMeasure } from "./models/programMeasure.js";
import { ProgramTimeframe } from "./models/programTimeframe.js";
import { ProgramWeek } from "./models/programWeek.js";

const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== "test") {
  sequelize.authenticate()
    .then(() => {
      console.log("Database connected!");
      return sequelize.sync();
    })
    .then(() => {
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error("Database connection failed:", err));
}

// CLIENT ROUTES
app.get("/clients", async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
});

app.get("/clients/:id", async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (!client) return res.status(404).json({ error: "Client not found" });
  res.json(client);
});

// PROGRAM ATTRIBUTE ROUTES
app.get("/program-attributes", async (req, res) => {
  const items = await ProgramAttribute.findAll();
  res.json(items);
});

app.get("/program-attributes/:id", async (req, res) => {
  const item = await ProgramAttribute.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramAttribute not found" });
  res.json(item);
});

// PROGRAM SCHEDULE TYPE ROUTES
app.get("/program-schedule-types", async (req, res) => {
  const items = await ProgramScheduleType.findAll();
  res.json(items);
});

app.get("/program-schedule-types/:id", async (req, res) => {
  const item = await ProgramScheduleType.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramScheduleType not found" });
  res.json(item);
});

// PROGRAM LANGUAGE ROUTES
app.get("/program-languages", async (req, res) => {
  const items = await ProgramLanguage.findAll();
  res.json(items);
});

app.get("/program-languages/:id", async (req, res) => {
  const item = await ProgramLanguage.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramLanguage not found" });
  res.json(item);
});

// PROGRAM CHANNEL ROUTES
app.get("/program-channels", async (req, res) => {
  const items = await ProgramChannel.findAll();
  res.json(items);
});

app.get("/program-channels/:id", async (req, res) => {
  const item = await ProgramChannel.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramChannel not found" });
  res.json(item);
});

// PROGRAM MEASURE ROUTES
app.get("/program-measures", async (req, res) => {
  const items = await ProgramMeasure.findAll();
  res.json(items);
});

app.get("/program-measures/:id", async (req, res) => {
  const item = await ProgramMeasure.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramMeasure not found" });
  res.json(item);
});

// PROGRAM TIMEFRAME ROUTES
app.get("/program-timeframes", async (req, res) => {
  const items = await ProgramTimeframe.findAll();
  res.json(items);
});

app.get("/program-timeframes/:id", async (req, res) => {
  const item = await ProgramTimeframe.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramTimeframe not found" });
  res.json(item);
});

// PROGRAM WEEK ROUTES
app.get("/program-weeks", async (req, res) => {
  const items = await ProgramWeek.findAll();
  res.json(items);
});

app.get("/program-weeks/:id", async (req, res) => {
  const item = await ProgramWeek.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramWeek not found" });
  res.json(item);
});

export default app;
