import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
const ProgramTimeframe = sequelize.define("ProgramTimeframe", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    timeframe: {
        type: DataTypes.STRING(15)
    }
}, {
    tableName: "program_timeframe",
    schema: "reference",
    timestamps: false
});

export { ProgramTimeframe };