const boom = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class FondoService {

  constructor() {}

  async create(data) {
    const newFondo = await models.Fondo.create(data);
    return newFondo;
  }

  async findOne(id = 0) {
    const Fondo = id === 0 ? await models.Fondo.findAll() : await models.Fondo.findByPk(id);
    console.log(Fondo,' servicio');
    
    if (!Fondo) {
      throw boom.notFound('Fondo no encontrado')
    }
      return Fondo;
  }

}

module.exports = FondoService;
