const { Model, DataTypes } = require("sequelize");

class Camera extends Model {
  static init(sequelize) {
    super.init(
      {
        ip: DataTypes.INTEGER,
        quantity: DataTypes.INTEGER,
        file_name: DataTypes.STRING,
        size: DataTypes.INTEGER,
        url:DataTypes.STRING

      },
      {
        sequelize,
      }
    );
  }
  
}

module.exports = Camera;
