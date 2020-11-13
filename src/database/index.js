const Sequilize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequilize(dbConfig);

const Camera = require('../models/Camera');
const Wifi = require('../models/Wifi');
const Bluetooth = require('../models/Bluetooth');
const Rfid = require('../models/Rfid');

Camera.init(connection);
Wifi.init(connection);
Bluetooth.init(connection);
Rfid.init(connection);

module.exports = connection;