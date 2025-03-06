
import { Sequelize, DataTypes } from "sequelize";

import {sequelize} from "../dbconnection/dbconnection.js"
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

export {Client}