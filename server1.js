
import dotenv from "dotenv";
dotenv.config();

import { sequelize } from "./dbconnection/dbconnection.js";


import { ProgramLanguage } from "./models/programLanguage.js";
import { ProgramChannel } from "./models/programChannel.js";

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




export default app;

//     const user = await User.create({ name, email });
//     res.status(201).json(user);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
