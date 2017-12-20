const inventory = require('express').Router()
    , request = require('superagent')
    , con = require('./../db/connections/mysql.connect.js');

bo.get('/inventoryPlans', (req, res) => {
  con.query('', (err, result, fields) => {

  });
});

module.exports = bo;
