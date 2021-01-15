// config.js
const config = {
 app: {
   port: 3306  
 },
 db: {
   host: 'portfolio.czb9jhucfktq.us-east-2.rds.amazonaws.com',
   port: 3306,
   name: 'portfolio'   
 }
};

config.server = {
  host: '18.191.111.234',
  port: process.env.PORT || 3306
};

module.exports = config;

// db.js
const mongoose = require('mongoose');
const config = require('./config');

const { db: { host, port, name } } = config;
const connectionString = `mongodb://${host}:${port}/${name}`;
mongoose.connect(connectionString);

// app.js
const express = require('express');
const config = require('./config');

const app = express();
app.listen(config.app.port);


