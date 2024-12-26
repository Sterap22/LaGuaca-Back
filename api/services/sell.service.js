const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

const DetailService = require('../services/detailSell.service');
const service = new DetailService();

class SellService {

    constructor() { }

    async create(data) {
        const newSell = await (data.id !== 0 && !!data.id) ?  this.update(data.id, data) : models.Sell.create(data);
        newSell.then((succ)=>{
                service.create(succ.dataValues);
        })
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