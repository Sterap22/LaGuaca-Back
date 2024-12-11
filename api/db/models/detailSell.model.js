const { Model, DataTypes, Sequelize } = require('sequelize');


const DETAILSELL_TABLE = 'detailSell';

const DetailSellSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    productName: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    sellId: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    productId: {
        allowNull: false,
        type: DataTypes.INTEGER
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

class DetailSell extends Model  {
    static associate(){
        //associate
    }

    static config(sequelize) {
        return{
            sequelize,
            tableName: DETAILSELL_TABLE,
            modelName: 'DetailSell',
            timestamps: false
        }
    }
}

module.exports = { DETAILSELL_TABLE, DetailSellSchema, DetailSell }