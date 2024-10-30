const { FondoSchema, Fondo } = require('./fondo.model');
const { TransaccionSchema, Transaccion } = require('./transaccion.model');

function setupModels(sequelize){
  Fondo.init(FondoSchema, Fondo.config(sequelize))
  Transaccion.init(TransaccionSchema, Transaccion.config(sequelize))
}

module.exports = setupModels;
