const express = require('express');

const router = express.Router();

const Controllers = require('../controllers/Controllers');

const multer = require('multer');
const multerConfig = require('../config/multer');


router.route('/cam/list').get(Controllers.list);
router.route('/cam/store').post(multer(multerConfig).single('file'), Controllers.store);
router.route('/cam/realtime').get(Controllers.endvalueCamera);
router.route('/cam/average/day').get(Controllers.showDateDay);

router.route('/wifi/store').post(Controllers.wifiStore);
router.route('/wifi/list').get(Controllers.wifiList);
router.route('/wifi/realtime').get(Controllers.endvalueWifi);

router.route('/blue/store').post(Controllers.blueStore);
router.route('/blue/list').get(Controllers.blueList);
router.route('/blue/realtime').get(Controllers.endvalueBluetooth);

module.exports = router;