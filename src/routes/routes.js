const express = require('express');

const router = express.Router();

const CameraControllers = require('../controllers/CameraControllers');

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
router.route('/blue/average/day').get(WifiControllers.showDateDay);

module.exports = router;