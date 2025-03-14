
import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
const ProgramScheduleType = sequelize.define("ProgramScheduleType", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_default: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: "program_schedule_type",
    schema: "reference",
    timestamps: false
});

export { ProgramScheduleType };