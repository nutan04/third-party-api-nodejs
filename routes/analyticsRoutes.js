const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/', analyticsController.trackPageView);

router.get('/track-event', analyticsController.trackEvent);

module.exports = router;