const { Model, DataTypes, Sequelize } = require('sequelize');

const SELLSTATE_TABLE = 'sellState';

const SellStateSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING
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

class SellState extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SELLSTATE_TABLE,
            modelName: 'SellState',
            timestamps: false
        }
    }
}

module.exports = { SELLSTATE_TABLE, SellStateSchema, SellState }