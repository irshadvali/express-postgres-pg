// models/programChannel.js

import { Sequelize, DataTypes } from "sequelize";
import { sequelize } from "../dbconnection/dbconnection.js";

const ProgramChannel = sequelize.define("ProgramChannel", {
    channel: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true
    }
}, {
    tableName: "program_channel",
    schema: "reference",
    timestamps: false
});

export { ProgramChannel };