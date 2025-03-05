import { Sequelize, DataTypes } from "sequelize";

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
    abbreviation: {
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

export { sequelize, Client };
