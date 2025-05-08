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
import { ProgramStatus } from "./models/programStatus.js";
import {TableRef} from "./models/tableRef.js"
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
// TableRef ROUTES
app.get("/api/table_ref", async (req, res) => {
  const tableref = await TableRef.findAll();
  res.json(tableref);
});
// Create TableRef
app.post("/api/table_ref", async (req, res) => {
  try {
    const newItem = await TableRef.create(req.body);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update TableRef
app.put("/api/table_ref/:id", async (req, res) => {
  try {
    const [updated] = await TableRef.update(req.body, {
      where: { table_id: req.params.id }
    });

    if (!updated) {
      return res.status(404).json({ error: "TableRef not found" });
    }

    res.json({ message: "TableRef updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete TableRef
app.delete("/api/table_ref/:id", async (req, res) => {
  try {
    const deleted = await TableRef.destroy({
      where: { table_id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ error: "TableRef not found" });
    }

    res.json({ message: "TableRef deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// CLIENT ROUTES
app.get("/api/clients", async (req, res) => {
  const clients = await Client.findAll();
  res.json(clients);
});

app.get("/api/clients/:id", async (req, res) => {
  const client = await Client.findByPk(req.params.id);
  if (!client) return res.status(404).json({ error: "Client not found" });
  res.json(client);
});

// PROGRAM ATTRIBUTE ROUTES
app.get("/api/program-attributes", async (req, res) => {
  const items = await ProgramAttribute.findAll();
  res.json(items);
});

app.get("/api/program-attributes/:id", async (req, res) => {
  const item = await ProgramAttribute.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramAttribute not found" });
  res.json(item);
});

// PROGRAM SCHEDULE TYPE ROUTES
app.get("/api/program-schedule-types", async (req, res) => {
  const items = await ProgramScheduleType.findAll();
  res.json(items);
});

app.get("/api/program-schedule-types/:id", async (req, res) => {
  const item = await ProgramScheduleType.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramScheduleType not found" });
  res.json(item);
});

// PROGRAM LANGUAGE ROUTES
app.get("/api/program-languages", async (req, res) => {
  const items = await ProgramLanguage.findAll();
  res.json(items);
});

app.get("/api/program-languages/:id", async (req, res) => {
  const item = await ProgramLanguage.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramLanguage not found" });
  res.json(item);
});

app.post("/api/program-languages", async (req, res) => {
  try {
    const item = await ProgramLanguage.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.put("/api/program-languages/:id", async (req, res) => {
  try {
    const [updated] = await ProgramLanguage.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated) {
      return res.status(404).json({ error: "ProgramLanguage not found" });
    }

    res.json({ message: "ProgramLanguage updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
app.delete("/api/program-languages/:id", async (req, res) => {
  try {
    const deleted = await ProgramLanguage.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ error: "ProgramLanguage not found" });
    }

    res.json({ message: "ProgramLanguage deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// PROGRAM CHANNEL ROUTES
app.get("/api/program-channels", async (req, res) => {
  const items = await ProgramChannel.findAll();
  res.json(items);
});

app.get("/api/program-channels/:id", async (req, res) => {
  const item = await ProgramChannel.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramChannel not found" });
  res.json(item);
});

app.post("/api/program-channels", async (req, res) => {
  try {
    const item = await ProgramChannel.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/program-channels/:id", async (req, res) => {
  try {
    const [updated] = await ProgramChannel.update(req.body, {
      where: { id: req.params.id }
    });

    if (!updated) {
      return res.status(404).json({ error: "ProgramChannel not found" });
    }

    res.json({ message: "ProgramChannel updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/program-channels/:id", async (req, res) => {
  try {
    const deleted = await ProgramChannel.destroy({
      where: { id: req.params.id }
    });

    if (!deleted) {
      return res.status(404).json({ error: "ProgramChannel not found" });
    }

    res.json({ message: "ProgramChannel deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PROGRAM MEASURE ROUTES
app.get("/api/program-measures", async (req, res) => {
  const items = await ProgramMeasure.findAll();
  res.json(items);
});

app.get("/api/program-measures/:id", async (req, res) => {
  const item = await ProgramMeasure.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramMeasure not found" });
  res.json(item);
});

// PROGRAM TIMEFRAME ROUTES
app.get("/api/program-timeframes", async (req, res) => {
  const items = await ProgramTimeframe.findAll();
  res.json(items);
});

app.get("/api/program-timeframes/:id", async (req, res) => {
  const item = await ProgramTimeframe.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramTimeframe not found" });
  res.json(item);
});

// PROGRAM WEEK ROUTES
app.get("/api/program-weeks", async (req, res) => {
  const items = await ProgramWeek.findAll();
  res.json(items);
});

app.get("/api/program-weeks/:id", async (req, res) => {
  const item = await ProgramWeek.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramWeek not found" });
  res.json(item);
});

// Add to the bottom of server.js
app.get("/api/program-statuses", async (req, res) => {
  const items = await ProgramStatus.findAll();
  res.json(items);
});

app.get("/api/program-statuses/:id", async (req, res) => {
  const item = await ProgramStatus.findByPk(req.params.id);
  if (!item) return res.status(404).json({ error: "ProgramStatus not found" });
  res.json(item);
});

// Mapped Data ROUTE
app.get("/api/mapped-data", async (req, res) => {
  const [tableRefs, programLanguages, programChannels] = await Promise.all([
    TableRef.findAll(),
    ProgramLanguage.findAll({ include: TableRef }),
    ProgramChannel.findAll({ include: TableRef })
  ]);

  res.json({
    tableRefs,
    programLanguages,
    programChannels
  });
});
export default app;
