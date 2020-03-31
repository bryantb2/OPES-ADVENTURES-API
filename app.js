// INCLUDE DEPENDENCIES 
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const app = express();

// INCLUDE ROUTES
const infoRouter = require('./routes/infoRoute');
const brandingRouter = require('./routes/brandingRoute');

// INCLUDE MIDDLE-WARES 
app.use(express.json());
app.use(cors({
    origin: process.env.DEV_STATUS === "PRODUCTION" ? process.env.PRODUCTION_ORIGIN : process.env.DEV_ORIGIN
}));
app.use(express.static('public'));

// USE ROUTES
app.use('/info',infoRouter);
app.use('/branding', brandingRouter);

// LISTENER
const port = process.env.PORT || 8080;
app.listen(port, () => console.log('Listening on port: ' + port));