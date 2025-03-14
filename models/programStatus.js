import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
const ProgramStatus = sequelize.define("ProgramStatus", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    is_default: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: "program_status",
    schema: "reference",
    timestamps: false
});

export { ProgramStatus };
