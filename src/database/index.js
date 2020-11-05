const Sequilize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequilize(dbConfig);

const Camera = require('../model/Camera');

Camera.init(connection);

module.exports = connection;