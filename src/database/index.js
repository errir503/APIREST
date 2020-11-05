const Sequilize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequilize(dbConfig);

const Camera = require('../models/Camera');

Camera.init(connection);

module.exports = connection;