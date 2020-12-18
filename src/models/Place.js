const { Model, DataTypes } = require("sequelize");

class Place extends Model {
  static init(sequelize) {
    super.init(
      {
        description: DataTypes.STRING,
        max_quantity: DataTypes.INTEGER,
      },
      {
        sequelize,
      }
    );
  }
  
}

module.exports = Place;