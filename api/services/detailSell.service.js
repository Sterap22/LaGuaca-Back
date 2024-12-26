const { models } = require('../libs/sequelize');
const sequelize = require('../libs/sequelize');



class DetailService {

    constructor() { }

    async create(data) {
        //consultamos si existe el id de la mesa
        const Detail = await this.findbyId(data.id);

        //analizamos la data para su insercion
        this.analyctData(data.id, data.product, Detail);

        return data
    }

    async findbyId(id) {
        const Detail = await models.DetailSell.findAll({
            where: {
                sellId: id
            }
        });
        return Detail
    }

    async analyctData(id, currenData, oldData) {
        // Parseamos los datos actuales
        const currenDataTP = JSON.parse(currenData); 
    
        // Iteramos sobre los datos actuales
        for (const element of currenDataTP) {
            const request = {
                productName: element.name,
                sellId: id,
                productId: element.id,
                createdAt: element.addedAt
            };
    
            // Si no hay datos previos, inserta directamente
            if (oldData.length === 0) {
                await models.DetailSell.create(request);
            } else {
                // Verifica si ya existe el dato
                const alreadyExists = await sequelize.query(
                    `SELECT * FROM detailSell WHERE create_at = STR_TO_DATE(:addedAt, '%Y-%m-%dT%H:%i:%s') 
                        and sellId = :sellId and productId = :productId;`,
                    {
                      replacements: {
                        addedAt: request.createdAt,
                        sellId: request.sellId,
                        productId: request.productId
                      },
                      type: sequelize.QueryTypes.SELECT,
                    }
                  );
                  
                if (alreadyExists.length === 0) {
                    await models.DetailSell.create(request);
                }
            }
        }
    }    
}

module.exports = DetailService;