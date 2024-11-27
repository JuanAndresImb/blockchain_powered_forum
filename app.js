require('dotenv').config();
const express = require('express');
cost session = require('express-session');
const bodyParser = require('body-parser');

const app = express(); 

//sessions config

app.use(session({
    secret: 'llavePrivada89';
    resave: false,
    saveUninitialized: true, // A session is uninitialized when it is new but not modified. Choosing false is useful for implementing login sessions, reducing server storage usage, or complying with laws that require permission before setting a cookie.
    cookie: { secure: false }
}));

//body-parser config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//importing routes
const authRoutees = require('./(routes/authRoutes');
const newRoutes = require('./routes/newRoutes');
const verificationRoutes = require('./routes/verificationRoutes');

//using routes

app.use('./auth', authRoutees);
app.use('./news', newRoutes);
app.use('./verification', verificationRoutes);
const sequelize = require('./config/database');

//sync models with db
sequelize.sync().then(() => {
    console.log("Database well synchronized");
}).catch(err => {
    console.error("Error on database synchronisation", err);
});


//Server Port

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});∏