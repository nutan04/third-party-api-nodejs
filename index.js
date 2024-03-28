const express = require('express');
const session = require('express-session');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const analyticsRoutes = require('./routes/analyticsRoutes');
const authRoutes = require('./routes/authRoutes');
const thirdpartyRoutes = require('./routes/thirdpartyRoutes');



const app = express();

// Configure Express session middleware
app.use(session({
    secret: 'your_secret_key',
    resave: true,
    saveUninitialized: true
}));

// Initialize Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Configure Passport Facebook Strategy
passport.use(new FacebookStrategy({
    clientID: 'your_facebook_app_id',
    clientSecret: 'your_facebook_app_secret',
    callbackURL: 'http://localhost:3000/auth/facebook/callback',
    profileFields: ['id', 'displayName', 'photos', 'email']
}, (accessToken, refreshToken, profile, done) => {
    // Authentication callback logic
    // You can save user data or perform other operations here
    return done(null, profile);
}));

// Serialize and Deserialize user
passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((obj, done) => {
    done(null, obj);
});


app.use('/', analyticsRoutes);
app.use('/auth', authRoutes);
app.use('/api', thirdpartyRoutes);


// Serve static files
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});