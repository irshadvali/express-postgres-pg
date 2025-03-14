
import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
const ProgramType = sequelize.define("ProgramType", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    programtype: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: "program_type",
    schema: "reference",
    timestamps: false
});

export { ProgramType };