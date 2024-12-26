const { models } =  require('../libs/sequelize');
const sequelize = require('../libs/sequelize');

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

        const TableAll = await sequelize.query(
            `SELECT T.create_at, T.id, T.name, T.state,
			              S.quantity ,S.product
                      FROM sell AS S
                      INNER JOIN sellType AS T ON S.idTable = T.id
                      WHERE T.state = 1`,
            {
              type: sequelize.QueryTypes.SELECT,
            }
          );
        return TableAll;
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