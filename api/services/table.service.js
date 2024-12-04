const { models } =  require('../libs/sequelize');

class TableService {

    constructor() {}

    async create(data) {
        const NewTable = await models.SellType.create(data);
        return NewTable;
    }

    async find() {
        const Table = await models.SellType.findAll({
            where: {
                state: true
            }
          });
        return Table;
      }

      async findOne(id) {
        const Table = await models.SellType.findByPk(id);
        if (!Table) {
          throw boom.notFound('Table not found')
        }
          return Table;
      }

      async update(id, changes) {
        const Table = await this.findOne(id);
        const rta = await Table.update(changes);
        if (!Table) {
          throw  boom.notFound('Table not found')
        }else{
          return rta;
        }
      }
}

module.exports  = TableService;