const { Model, DataTypes } = require("sequelize");

class Rfid extends Model {
  static init(sequelize) {
    super.init(
      {       
        id:DataTypes.STRING,
        entrada:DataTypes.BOOLEAN,
        data_hora:DataTypes.DATE,
      },
      {
        sequelize,
      }
    );
  }
  
}

module.exports = Rfid;
