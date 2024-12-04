const { models } = require('../libs/sequelize');

class ProductService {

    constructor() {}

    async create(data) {
        const NewProduct = await models.Product.create(data);
        return NewProduct;
    }

    async find() {
        const Product = await models.Product.findAll({
            where: {
              state: true
            }
        });
        return Product;
      }
}

module.exports = ProductService;