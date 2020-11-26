const { Model, DataTypes } = require("sequelize");

class Rfid extends Model {
  static init(sequelize) {
    super.init(
      {       
        id_rfid:DataTypes.STRING,
        entrada:DataTypes.BOOLEAN,
        data_hora:DataTypes.DATE,
        min:DataTypes.STRING,
        hour:DataTypes.STRING,
        day:DataTypes.STRING,
        month:DataTypes.STRING,
        year:DataTypes.STRING,
      },
      {
        sequelize,
      }
    );
  }
  
}

module.exports = Rfid;
