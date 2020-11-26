const express = require('express');

const router = express.Router();

const CameraControllers = require('../controllers/CameraControllers');
const WifiControllers = require('../controllers/WifiControllers');
const BluetoothControllers = require('../controllers/BluetoothControllers');
const GsmControllers = require('../controllers/GsmControllers');
const PirControllers = require('../controllers/PirControllers');
const RfidControllers = require('../controllers/RfidControllers');
const multer = require('multer');
const multerConfig = require('../config/multer');


router.route('/cam/list').get(CameraControllers.list);
router.route('/cam/store').post(multer(multerConfig).single('file'), CameraControllers.store);
router.route('/cam/realtime').get(CameraControllers.endvalue);
router.route('/cam/average/day').get(CameraControllers.showDateDay);

router.route('/wifi/store').post(WifiControllers.store);
router.route('/wifi/list').get(WifiControllers.list);
router.route('/wifi/realtime').get(WifiControllers.endvalue);
router.route('/wifi/average/day').get(WifiControllers.showDateDay);

router.route('/blue/store').post(BluetoothControllers.store);
router.route('/blue/list').get(BluetoothControllers.list);
router.route('/blue/realtime').get(BluetoothControllers.endvalue);
router.route('/blue/average/day').get(BluetoothControllers.showDateDay);

router.route('/gsm/store').post(GsmControllers.store);
router.route('/gsm/list').get(GsmControllers.list);
router.route('/gsm/realtime').get(GsmControllers.endvalue);
router.route('/gsm/average/day').get(GsmControllers.showDateDay);

router.route('/pir/store').post(PirControllers.store);
router.route('/pir/list').get(PirControllers.list);
router.route('/pir/realtime').get(PirControllers.endvalue);
router.route('/pir/average/day').get(PirControllers.showDateDay);

router.route('/rfid/store').post(RfidControllers.rfidStore);
router.route('/rfid/update').put(RfidControllers.rfidUpdate);
router.route('/rfid/realtime').get(RfidControllers.rfiQuantity);

module.exports = router;