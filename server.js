import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { sequelize } from "./dbconnection/dbconnection.js";
import { Client } from "./models/client.js";

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

export default app; // ✅ Make sure you're exporting the Express app instance
