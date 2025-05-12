
import { Sequelize, DataTypes } from "sequelize";

import {sequelize} from "../dbconnection/dbconnection.js"
// Define Client model
const TableRef = sequelize.define("TableRef", {
    table_id: {
        type: DataTypes.STRING(10),
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    table_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "table_reference",
    schema: "reference",
    timestamps: false
});

export {TableRef}