const express = require('express');

const router = express.Router();

const CameraControllers = require('../controllers/CameraControllers');

const multer = require('multer');
const multerConfig = require('../config/multer');


router.route('/cam/list').get(CameraControllers.list);
router.route('/cam/store').post(multer(multerConfig).single('file'), CameraControllers.store);
router.route('/cam/realtime').get(CameraControllers.endvalueCamera);
router.route('/cam/average/day').get(CameraControllers.showDateDay);

router.route('/wifi/store').post(CameraControllers.wifiStore);
router.route('/wifi/list').get(CameraControllers.wifiList);
router.route('/wifi/realtime').get(CameraControllers.endvalueWifi);

router.route('/blue/store').post(CameraControllers.blueStore);
router.route('/blue/list').get(CameraControllers.blueList);
router.route('/blue/realtime').get(CameraControllers.endvalueBlue);

module.exports = router;