import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
const ProgramWeek = sequelize.define("ProgramWeek", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    week_day: {
        type: DataTypes.STRING(100)
    }
}, {
    tableName: "program_week",
    schema: "reference",
    timestamps: false
});

export { ProgramWeek };
