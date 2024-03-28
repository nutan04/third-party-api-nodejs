const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/facebook', authController.facebookLogin);
router.get('/facebook/callback', authController.facebookCallback);
router.get('/logout', authController.logout);

module.exports = router;
