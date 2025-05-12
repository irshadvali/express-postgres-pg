// models/programChannel.js

import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";
import { TableRef } from "./tableRef.js";
const ProgramChannel = sequelize.define("ProgramChannel", {
    channel: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    },
    table_id: {
        type: DataTypes.STRING(10),
        references: {
          model: "table_reference",
          key: "table_id"
        }
      }
}, {
    tableName: "program_channel",
    schema: "reference",
    timestamps: false
});
TableRef.hasMany(ProgramChannel, { foreignKey: "table_id" });
ProgramChannel.belongsTo(TableRef, { foreignKey: "table_id" });
export { ProgramChannel };