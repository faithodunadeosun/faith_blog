//requiring the packages you need
const express = require('express');
const bodyparser = require('body-parser')
require('dotenv').config()
const {PORT, BASE_URL, DB_URL} = process.env
const mongoose = require('./config/mongo.config')

//initializing your packages
const app = express();
//parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({extended: false}));
//parse application/json
app.use(bodyparser.json());

//routes
app.use('/api', require('./routes/home.routes'));

//starter server
app.listen(PORT , async () => {
    await mongoose(DB_URL)
    console.log(`app is running on port ${BASE_URL}${PORT}`)
});