'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.createTable("cameras",{
      id:{
        type: Sequelize.INTEGER,
        primareKey: true,
        autoIncrement:true,
        allowNull:false,
      },
      ip:{
        type: Sequelize.INTEGER,
      },
      quantity:{
        type:Sequelize.INTEGER
      },
      file_name:{
        type:Sequelize.STRING
      },
      size:{
        type:Sequelize.INTEGER
      },
      url:{
        type: Sequelize.STRING
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
    
       return queryInterface.dropTable('cameras');
     
  }
};