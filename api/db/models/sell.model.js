const { Model, DataTypes, Sequelize } = require('sequelize');

const SELL_TABLE =  'sell';

const SellSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    quantity: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    idTable: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    product: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    idUser: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    clientName: {
        allowNull: true,
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

class Sell extends Model {
    static associate() {
        // associate
    }

    static config(sequelize) {
        return{
            sequelize,
            tableName: SELL_TABLE,
            modelName: 'Sell',
            timestamps: false
        }
    } 
}

module.exports = { SELL_TABLE, SellSchema, Sell }