import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";

const ProgramMeasure = sequelize.define("ProgramMeasure", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    measure_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: "program_measure",
    schema: "reference",
    timestamps: false
});

export { ProgramMeasure };