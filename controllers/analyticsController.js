// controllers/analyticsController.js
const ua = require('universal-analytics');

const visitor = ua('GA4_PROPERTY_ID'); // Replace with your GA tracking ID

exports.trackPageView = (req, res, next) => {
    visitor.pageview(req.originalUrl).send();
    next();
};

exports.trackEvent = (req, res) => {
    visitor.event('Category', 'Action').send();
    res.send('Event tracked!');
};
