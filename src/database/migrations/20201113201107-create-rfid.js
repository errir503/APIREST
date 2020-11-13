'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable("rfids",{
      id:{
        type: Sequelize.STRING,
        primareKey: true,
      },         
      entrada:{
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      data_hora:{
        type:Sequelize.DATE,
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

  down: async (queryInterface, Sequelize) => {
    
       return queryInterface.dropTable('rfids');
     
  }
};