const passport = require('passport');

exports.facebookLogin = passport.authenticate('facebook');

exports.facebookCallback = passport.authenticate('facebook', { failureRedirect: '/' }),
    (req, res) => {
        res.redirect('/');
    };

exports.logout = (req, res) => {
    req.logout();
    res.redirect('/');
};
