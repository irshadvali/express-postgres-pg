import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
const ProgramTimezone = sequelize.define("ProgramTimezone", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    timezone: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: "program_timezone",
    schema: "reference",
    timestamps: false
});

export { ProgramTimezone };