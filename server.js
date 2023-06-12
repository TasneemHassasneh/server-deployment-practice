'use strict';

// Server js

const express = require('express');
const  app = express();

const cors = require('cors');
app.use(cors());


const pageNotFound = require('./middleware/pageNotfound');
const serverError = require('./middleware/serverError')

app.get('/', handleHome);
app.get('/bad', badRequest);

app.use('*', pageNotFound);
app.use(serverError);

function handleHome(req, res) {
  res.status(200).json({
    code: 200,
    message: 'Welcome to Home page',
    time: req.stamper
  })
}

function badRequest(req, res, next) {
  req.body = {
    test: 'test'
  }
    next({message: 'Not a Number'})
}



function start(port) {
  app.listen(port, () => console.log('Up and running on port: ', port))
}

module.exports = {
  app,
  start
}