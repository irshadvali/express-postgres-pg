

import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
const ProgramLanguage = sequelize.define("ProgramLanguage", {
    language: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    is_default: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: "program_language",
    schema: "reference",
    timestamps: false
});

export { ProgramLanguage };