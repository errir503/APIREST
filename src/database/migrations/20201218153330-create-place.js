'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.createTable("places", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING
        },
        max_quantity: {
            type: Sequelize.INTEGER
        },
        created_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
        updated_at: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    })
  },

  down: async(queryInterface, Sequelize) => {
    return queryInterface.dropTable('places');
  }
};
