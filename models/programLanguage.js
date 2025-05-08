

import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
import { TableRef } from "./tableRef.js";
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
    },
    table_id: {
        type: DataTypes.STRING(10),
        references: {
          model: "table_reference",
          key: "table_id"
        }
      }
}, {
    tableName: "program_language",
    schema: "reference",
    timestamps: false
});
TableRef.hasMany(ProgramLanguage, { foreignKey: "table_id" });
ProgramLanguage.belongsTo(TableRef, { foreignKey: "table_id" });
export { ProgramLanguage };