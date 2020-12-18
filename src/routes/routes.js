const express = require('express');

const router = express.Router();

const CameraControllers = require('../controllers/CameraControllers');
const WifiControllers = require('../controllers/WifiControllers');
const BluetoothControllers = require('../controllers/BluetoothControllers');
const GsmControllers = require('../controllers/GsmControllers');
const PirControllers = require('../controllers/PirControllers');
const RfidControllers = require('../controllers/RfidControllers');
const PlaceControllers = require('../controllers/PlaceControllers');

const multer = require('multer');
const multerConfig = require('../config/multer');


router.route('/cam/list').get(CameraControllers.list);
router.route('/cam/store').post(multer(multerConfig).single('file'), CameraControllers.store);
router.route('/cam/realtime').get(CameraControllers.endvalue);
router.route('/cam/average/day').get(CameraControllers.showDateDay);
router.route('/cam/averagePerDay').get(CameraControllers.averagePerDay);
router.route('/cam/crowdAndQuietDay').get(CameraControllers.crowdAndQuietDay);
router.route('/cam/dateMoreAndLess').get(CameraControllers.dateMoreAndLess);
router.route('/cam/crowdAndQuietMonth').get(CameraControllers.crowdAndQuietMonth);
router.route('/cam/crowdAndQuietHour').get(CameraControllers.crowdAndQuietHour);

router.route('/wifi/store').post(WifiControllers.store);
router.route('/wifi/list').get(WifiControllers.list);
router.route('/wifi/realtime').get(WifiControllers.endvalue);
router.route('/wifi/average/day').get(WifiControllers.showDateDay);

router.route('/blue/store').post(BluetoothControllers.store);
router.route('/blue/list').get(BluetoothControllers.list);
router.route('/blue/realtime').get(BluetoothControllers.endvalue);
router.route('/blue/average/day').get(BluetoothControllers.showDateDay);
router.route('/blue/averagePerDay').get(BluetoothControllers.averagePerDay);
router.route('/blue/crowdAndQuietDay').get(BluetoothControllers.crowdAndQuietDay);
router.route('/blue/dateMoreAndLess').get(BluetoothControllers.dateMoreAndLess);
router.route('/blue/crowdAndQuietMonth').get(BluetoothControllers.crowdAndQuietMonth);
router.route('/blue/crowdAndQuietHour').get(BluetoothControllers.crowdAndQuietHour);

router.route('/gsm/store').post(GsmControllers.store);
router.route('/gsm/list').get(GsmControllers.list);
router.route('/gsm/realtime').get(GsmControllers.endvalue);
router.route('/gsm/average/day').get(GsmControllers.showDateDay);
router.route('/gsm/averagePerDay').get(GsmControllers.averagePerDay);

router.route('/pir/store').post(PirControllers.store);
router.route('/pir/list').get(PirControllers.list);
router.route('/pir/realtime').get(PirControllers.endvalue);
router.route('/pir/average/day').get(PirControllers.showDateDay);

router.route('/rfid/store').post(RfidControllers.rfidStore);
router.route('/rfid/update').put(RfidControllers.rfidUpdate);
router.route('/rfid/realtime').get(RfidControllers.rfiQuantity);

router.route('/place/store').post(PlaceControllers.store);
router.route('/place/update').put(PlaceControllers.update);
router.route('/place/show').get(PlaceControllers.show);

module.exports = router;