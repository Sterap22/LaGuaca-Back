const { Model, DataTypes } = require('sequelize');

const TRANSACCION_TABLE = 'Transaccion';

const TransaccionSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tipo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  notificacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fondoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Fondos',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
};

class Transaccion extends Model {
  static associate(models) {
    this.belongsTo(models.Fondo, { foreignKey: 'fondoId' });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: TRANSACCION_TABLE,
      modelName: 'Transaccion',
      timestamps: false,
    };
  }
}

module.exports = { TRANSACCION_TABLE, TransaccionSchema, Transaccion };
