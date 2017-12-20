const bo = require('express').Router()
    , request = require('superagent')
    , con = require('./../db/connections/mysql.connect.js');

bo.get('/getBookingOrder', (req, res) => {
  con.query('', (err, result, fields) => {

  });
});

module.exports = bo;
