const Sequilize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequilize(dbConfig);

const Camera = require('../models/Camera');
const Wifi = require('../models/Wifi');
const Bluetooth = require('../models/Bluetooth');

Camera.init(connection);
Wifi.init(connection);
Bluetooth.init(connection);

module.exports = connection;