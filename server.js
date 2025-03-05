import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { Sequelize, DataTypes } from "sequelize";

// Database connection
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: process.env.DB_PORT
});

// Define User model
const User = sequelize.define("User", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

const app = express();
app.use(express.json());

// Sync Database
sequelize.sync()
    .then(() => console.log("Database connected!"))
    .catch(err => console.error("Database connection failed:", err));

// Routes
app.get("/users", async (req, res) => {
    const users = await User.findAll();
    res.json(users);
});

app.post("/users", async (req, res) => {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json(user);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
