const { Model, DataTypes } = require('sequelize');

const FONDO_TABLE = 'Fondos';

const FondoSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  monto_minimo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
  },
};

class Fondo extends Model {
  static associate(models) {
    this.hasMany(models.Transaccion, { foreignKey: 'fondoId', as: 'transacciones' }); 
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: FONDO_TABLE,
      modelName: 'Fondo',
      timestamps: false,
    };
  }
}

module.exports = { FONDO_TABLE, FondoSchema, Fondo };
