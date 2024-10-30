const { Model, DataTypes } = require('sequelize');

const GINFO_TABLE = 'GeneralInformation';

const GInfoSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
}