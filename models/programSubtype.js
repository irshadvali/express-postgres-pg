import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
const ProgramSubtype = sequelize.define("ProgramSubtype", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    program_sub_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    program_type_id: {
        type: DataTypes.UUID
    }
}, {
    tableName: "program_subtype",
    schema: "reference",
    timestamps: false
});

export { ProgramSubtype };