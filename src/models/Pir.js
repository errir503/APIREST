const { Model, DataTypes } = require("sequelize");

class Pir extends Model {
    static init(sequelize) {
        super.init({
            quantity: DataTypes.INTEGER,
            min: DataTypes.STRING,
            hour: DataTypes.STRING,
            day: DataTypes.STRING,
            month: DataTypes.STRING,
            year: DataTypes.STRING,
        }, {
            sequelize,
        });
    }

}

module.exports = Pir;