const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class TransaccionService {

  constructor() {}

  async createTransaccion(data) {
      
    const fondo = await models.Fondo.findByPk(data.fondoId);
    if (!fondo) throw boom.notFound('Fondo no encontrado');

    if (data.monto < fondo.monto_minimo) {
        throw  boom.badRequest('Monto insuficiente para vincularse al fondo');
    }

    return await models.Transaccion.create(data);
  }

  async getTransacciones() {
    const newFondo = await models.Transaccion.findAll();
    return newFondo;
  }

}

module.exports = TransaccionService;
