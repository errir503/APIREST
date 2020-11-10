const express = require('express');

const router = express.Router();

const CameraControllers = require('../controllers/CameraControllers');

const multer = require('multer');
const multerConfig = require('../config/multer');


router.route('/cam/list').get(CameraControllers.list);
router.route('/cam/store').post(multer(multerConfig).single('file'),CameraControllers.store);
router.route('/cam/realtime').get(CameraControllers.endvalue);
router.route('/cam/average/day').get(CameraControllers.showDateDay);

module.exports = router;