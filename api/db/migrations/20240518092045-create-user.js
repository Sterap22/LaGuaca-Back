'use strict';

const { CATEGORY_TABLE, CategorySchema } = require('../models/category.model');
const { PRODUCT_TABLE, ProductSchema } = require('../models/product.model');
const { SELL_TABLE, SellSchema } = require('../models/Sell.model');
const { SellStateSchema, SELLSTATE_TABLE } = require('../models/sellStete.model');
const { SellTypeSchema, SELLTYPE_TABLE } = require('../models/sellType.model');
const { TEMPLATE_TABLE, TemplateSchema } = require('../models/template.model');
const { USER_TABLE, UserSchema } = require('../models/user.model');
const { CONTACT_TABLE, ContactSchema } = require('../models/userContact.model');
const { USERINFORMATION_TABLE, InformationSchema } = require('../models/userInformation.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(TEMPLATE_TABLE, TemplateSchema);
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(CONTACT_TABLE, ContactSchema);
    await queryInterface.createTable(USERINFORMATION_TABLE, InformationSchema);
    await queryInterface.createTable(CATEGORY_TABLE, CategorySchema);
    await queryInterface.createTable(PRODUCT_TABLE, ProductSchema);
    await queryInterface.createTable(SELL_TABLE, SellSchema);
    await queryInterface.createTable(SELLSTATE_TABLE, SellStateSchema);
    await queryInterface.createTable(SELLTYPE_TABLE, SellTypeSchema);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(CONTACT_TABLE);
    await queryInterface.dropTable(TEMPLATE_TABLE);
    await queryInterface.dropTable(USERINFORMATION_TABLE);
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(CATEGORY_TABLE);
    await queryInterface.dropTable(PRODUCT_TABLE);
    await queryInterface.dropTable(SELL_TABLE);
    await queryInterface.dropTable(SELLSTATE_TABLE);
    await queryInterface.dropTable(SELLTYPE_TABLE);
  }
};
