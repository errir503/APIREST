const Sequilize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequilize(dbConfig);

const Camera = require('../models/Camera');
const Wifi = require('../models/Wifi');
const Bluetooth = require('../models/Bluetooth');
const Rfid = require('../models/Rfid');
const Gsm = require('../models/Gsm');
const Pir = require('../models/Pir');
const Place = require('../models/Place');

Camera.init(connection);
Wifi.init(connection);
Bluetooth.init(connection);
Rfid.init(connection);
Gsm.init(connection);
Pir.init(connection);
Place.init(connection);

module.exports = connection;