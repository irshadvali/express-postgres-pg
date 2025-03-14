// models/programAttribute.js
import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";

const ProgramAttribute = sequelize.define("ProgramAttribute", {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    attribute: {
        type: DataTypes.STRING(256)
    }
}, {
    tableName: "program_attribute",
    schema: "reference",
    timestamps: false
});

export { ProgramAttribute };