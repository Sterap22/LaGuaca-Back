const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryService {

    constructor() {};

    async create(data) {
        const newCategory = await models.Category.create(data);
        return newCategory
    };

    async find() {
        const Category = await models.Category.findAll({
            where: {
                state: true
            }
          });
        return Category;
    }    
}

module.exports = CategoryService;