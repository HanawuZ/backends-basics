const express = require('express')
const config = require('./config/setup.js')
const userRoutes = require('./routes/user.routes.js')
const jobRoutes = require('./routes/jobs.routes.js')
const cors = require('cors');

// import express from 'express';
// import { SetupDatabase } from './config/setup.js';


const whitelist = ['http://localhost:3000']; //white list consumers
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'device-remember-token', 'Access-Control-Allow-Origin', 'Origin', 'Accept']
};

function main(){
  const app = express();
  const port = 3000;
  config.SetupDatabase()
  // config.SyncDatabase()
  // config.ConnectToDatabase()

  app.use(cors(corsOptions))

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

  app.use('/', userRoutes)
  app.use('/', jobRoutes)

}
main()
