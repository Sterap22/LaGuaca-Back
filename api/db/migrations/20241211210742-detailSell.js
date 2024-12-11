'use strict';

const { DETAILSELL_TABLE, DetailSellSchecma } = require('../models/detailSell.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(DETAILSELL_TABLE, DetailSellSchecma);
  },

  async down(queryInterface) {
    await queryInterface.dropTable(DETAILSELL_TABLE);
  }
};
