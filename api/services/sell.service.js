const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class SellService {

    constructor() { }

    async create(data) {
        const newSell = (data.id !== 0 && !!data.id) ? await this.update(data.id, data) :await models.Sell.create(data);
        return newSell;
    }

    async findOne(id) {
        const sell = await models.Sell.findByPk(id);
        if (!sell) {
            throw boom.notFound('Contact not found')
        }
        return sell;
    }

    async update(id, changes) {
        const sell = await this.findOne(id);
        if (!sell) {
            throw  boom.notFound('User not found')
        }else{
          const rta = await sell.update(changes);
          return rta;
        }
      }

}
module.exports = SellService;