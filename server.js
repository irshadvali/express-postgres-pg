import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Sequelize, DataTypes } from "sequelize";
// import { sequelize, Client } from './models/client.js';
// Database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: Number(process.env.DB_PORT)
});

// Define Client model
const Client = sequelize.define("Client", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    abberviation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    oipdi_client_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "client",
    schema: "acp",
    timestamps: false
});

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

app.post("/clients", async (req, res) => {
    const { name, abberviation, oipdi_client_name } = req.body;
    try {
        const client = await Client.create({ name, abberviation, oipdi_client_name });
        res.status(201).json(client);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
