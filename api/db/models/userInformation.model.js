const { Model, DataTypes, Sequelize } = require('sequelize');

const USERINFORMATION_TABLE = 'usersinformation';

const InformationSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  firstSurname: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'first_surname'
  },
  secondSurname: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'second_surname'
  },
  personalEmail: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'personal_email'
  },
  birthdate: {
    allowNull: false,
    type: DataTypes.DATE
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  userId: {
    field: 'user_id',
    allowNull: false,
    type: DataTypes.INTEGER
  },
  state: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}

class UserInformation extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USERINFORMATION_TABLE,
      modelName: 'UserInformation',
      timestamps: false
    }
  }
}


module.exports = { USERINFORMATION_TABLE, InformationSchema, UserInformation }
