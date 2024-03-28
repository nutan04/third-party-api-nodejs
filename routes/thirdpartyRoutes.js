const express = require('express');
const router = express.Router();
const thirdpartyController = require('../controllers/thirdpartyController');

router.get('/data', thirdpartyController.data);
router.get('/new-data', thirdpartyController.newdata);

// router.get('/track-event', analyticsController.trackEvent);

module.exports = router;