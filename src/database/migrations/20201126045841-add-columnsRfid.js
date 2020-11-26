'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    
      return Promise.all([
        queryInterface.addColumn(
          'rfids',
          'min',
          {
            type: Sequelize.STRING
          }
        ),
        queryInterface.addColumn(
          'rfids',
          'hour',
          {
            type: Sequelize.STRING
          }
        ),
        queryInterface.addColumn(
          'rfids',
          'day',
          {
            type: Sequelize.STRING
          }
        ),
        queryInterface.addColumn(
          'rfids',
          'month',
          {
            type: Sequelize.STRING
          }
        ),
        queryInterface.addColumn(
          'rfids',
          'year',
          {
            type: Sequelize.STRING
          }
        ),


      ]);
     
  },

  down: async (queryInterface, Sequelize) => {
    
      return Promise.all([
        queryInterface.removeColumn(
          'rfids',
          'min',
          
        ),
        queryInterface.removeColumn(
          'rfids',
          'hour',
          
        ),
        queryInterface.removeColumn(
          'rfids',
          'day',
          
        ),
        queryInterface.removeColumn(
          'rfids',
          'month',
         
        ),
        queryInterface.removeColumn(
          'rfids',
          'year',
          
        ),

      ]);
     
  }
};
