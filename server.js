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
import { ProgramType } from "./models/programType.js";
import { ProgramSubtype } from "./models/programSubtype.js";
import { ProgramTimezone } from "./models/programTimezone.js"
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

app.post("/api/program-attributes", async (req, res) => {
  try {
    const item = await ProgramAttribute.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/program-attributes/:id", async (req, res) => {
  try {
    const [updated] = await ProgramAttribute.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: "ProgramAttribute not found" });
    res.json({ message: "ProgramAttribute updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/program-attributes/:id", async (req, res) => {
  try {
    const deleted = await ProgramAttribute.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "ProgramAttribute not found" });
    res.json({ message: "ProgramAttribute deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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

app.post("/api/program-timeframes", async (req, res) => {
  try {
    const item = await ProgramTimeframe.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/program-timeframes/:id", async (req, res) => {
  try {
    const [updated] = await ProgramTimeframe.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: "ProgramTimeframe not found" });
    res.json({ message: "ProgramTimeframe updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/program-timeframes/:id", async (req, res) => {
  try {
    const deleted = await ProgramTimeframe.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "ProgramTimeframe not found" });
    res.json({ message: "ProgramTimeframe deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// Time zone

app.get("/api/program-timezones", async (req, res) => {
  try {
    const items = await ProgramTimezone.findAll();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/program-timezones/:id", async (req, res) => {
  try {
    const item = await ProgramTimezone.findByPk(req.params.id);
    if (!item) return res.status(404).json({ error: "ProgramTimezone not found" });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/program-timezones", async (req, res) => {
  try {
    const item = await ProgramTimezone.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/program-timezones/:id", async (req, res) => {
  try {
    const [updated] = await ProgramTimezone.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: "ProgramTimezone not found" });
    res.json({ message: "ProgramTimezone updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/program-timezones/:id", async (req, res) => {
  try {
    const deleted = await ProgramTimezone.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "ProgramTimezone not found" });
    res.json({ message: "ProgramTimezone deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

///////


app.post("/api/program-measures", async (req, res) => {
  try {
    const item = await ProgramMeasure.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/program-measures/:id", async (req, res) => {
  try {
    const [updated] = await ProgramMeasure.update(req.body, {
      where: { id: req.params.id }
    });
    if (!updated) return res.status(404).json({ error: "ProgramMeasure not found" });
    res.json({ message: "ProgramMeasure updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/program-measures/:id", async (req, res) => {
  try {
    const deleted = await ProgramMeasure.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "ProgramMeasure not found" });
    res.json({ message: "ProgramMeasure deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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


app.post("/api/program-weeks", async (req, res) => {
  try {
    const item = await ProgramWeek.create(req.body);
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put("/api/program-weeks/:id", async (req, res) => {
  try {
    const [updated] = await ProgramWeek.update(req.body, { where: { id: req.params.id } });
    if (!updated) return res.status(404).json({ error: "ProgramWeek not found" });
    res.json({ message: "ProgramWeek updated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.delete("/api/program-weeks/:id", async (req, res) => {
  try {
    const deleted = await ProgramWeek.destroy({ where: { id: req.params.id } });
    if (!deleted) return res.status(404).json({ error: "ProgramWeek not found" });
    res.json({ message: "ProgramWeek deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
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


// Type Api

app.get("/api/program-types", async (req, res) => {
  try {
    const types = await ProgramType.findAll();
    res.json(types);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/api/program-types/:id", async (req, res) => {
  try {
    const type = await ProgramType.findByPk(req.params.id);
    if (!type) return res.status(404).json({ error: "ProgramType not found" });
    res.json(type);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Subtype 

// Define association if not already
ProgramSubtype.belongsTo(ProgramType, { foreignKey: "program_type_id" });

app.get("/api/program-subtypes", async (req, res) => {
  try {
    const subtypes = await ProgramSubtype.findAll({
      include: {
        model: ProgramType,
        attributes: ["programtype"]
      },
      raw: true,
      nest: true
    });

    // Flatten the output
    const flattened = subtypes.map(item => ({
      id: item.id,
      program_sub_type: item.program_sub_type,
      program_type_id: item.program_type_id,
      programtype: item.ProgramType?.programtype || null
    }));

    res.json(flattened);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// GET ALL DATA in single response

app.get("/api/all-data", async (req, res) => {
  try {
    const tableRefs = await TableRef.findAll({ raw: true });

    const tableModelMap = {
      "Program Language": ProgramLanguage,
      "Program Channel": ProgramChannel,
      "Program Attributes": ProgramAttribute,
      "Program Measure": ProgramMeasure,
      "Program Timezone": ProgramTimezone,
      "Program Week": ProgramWeek,
      "Program Timeframe": ProgramTimeframe,
      "Program Status": ProgramStatus,
      "Program Schedule Type": ProgramScheduleType,
      "Program Types": ProgramType,
      "Program Subtypes": ProgramSubtype
    };

    const [programTypes, programSubtypesRaw] = await Promise.all([
      ProgramType.findAll({ raw: true }),
      ProgramSubtype.findAll({
        include: {
          model: ProgramType,
          attributes: ["programtype"]
        },
        raw: true,
        nest: true
      })
    ]);

    const flattenedSubtypes = programSubtypesRaw.map(sub => ({
      id: sub.id,
      program_sub_type: sub.program_sub_type,
      program_type_id: sub.program_type_id,
      programtype: sub.ProgramType?.programtype || null
    }));

    const dataMap = {};

    await Promise.all(
      Object.entries(tableModelMap).map(async ([tableName, model]) => {
        if (tableName === "Program Subtypes") {
          dataMap[tableName] = flattenedSubtypes;
        } else {
          dataMap[tableName] = await model.findAll({ raw: true });
        }
      })
    );

    const responseData = tableRefs.map(ref => ({
      table_id: ref.table_id,
      table_name: ref.table_name,
      tableData: dataMap[ref.table_name] || []
    }));

    res.json({
      status: 200,
      data: responseData
    });

  } catch (err) {
    console.error("Error in /api/all-data:", err);
    res.status(500).json({
      status: 500,
      error: err.message
    });
  }
});


export default app;
