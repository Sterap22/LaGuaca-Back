const { Model, DataTypes, Sequelize } = require('sequelize');

const TEMPLATE_TABLE = 'template';

const TemplateSchema = {
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
  description: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  },
  state: {
    allowNull: true,
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}

class Template extends Model {
  static associate() {
    // associate
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TEMPLATE_TABLE,
      modelName: 'Template',
      timestamps: false
    }
  }
}


module.exports = { TEMPLATE_TABLE, TemplateSchema, Template }
