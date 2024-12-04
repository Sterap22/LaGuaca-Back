const { Model, DataTypes, Sequelize } = require('sequelize');

const CONTACT_TABLE = 'contact';

const ContactSchema = {
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
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  state: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  userId: {
    field: 'user_id',
    allowNull: true,
    type: DataTypes.INTEGER
  }
}

class Contact extends Model {
  static associate() {
    //associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CONTACT_TABLE,
      modelName: 'Contact',
      timestamps: false
    }
  }
}


module.exports = { CONTACT_TABLE, ContactSchema, Contact }
