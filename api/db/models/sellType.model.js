const { Model, DataTypes, Sequelize } = require('sequelize');

const SELLTYPE_TABLE = 'sellType';

const SellTypeSchema = {
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

class SellType extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: SELLTYPE_TABLE,
            modelName: 'SellType',
            timestamps: false
        }
    }
}

module.exports = { SELLTYPE_TABLE, SellTypeSchema, SellType }