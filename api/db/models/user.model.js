const { Model, DataTypes } = require('sequelize');

const USER_TABLE = 'User';

const UserSchema = {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
}