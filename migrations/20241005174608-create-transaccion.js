'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transaccion', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      monto: {
        type: Sequelize.INTEGER
      },
      notificacion: {
        type: Sequelize.STRING
      },
      fondoId: {
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transaccion');
  }
};