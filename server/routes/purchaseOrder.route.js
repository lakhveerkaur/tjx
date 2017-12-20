const po = require('express').Router()
    , request = require('superagent')
    , con = require('./../db/connections/mysql.connect.js');

po.get('/purchaseOrder', (req, res) => {
  var obj = {
    poDetails : [],
    skuDetails : [],
    boData : []
  };
  var tableData = [];
  con.query('SELECT * FROM po_details', (err, result, fields) => {
    if (err) throw err;
    obj.poDetails = result;
    con.query('SELECT * FROM sku_table', (err1, result1, fields1) => {
      if (err1) throw err;
      obj.skuDetails = result1;
      con.query('select * from bo_data', (err2, result2, fields2) => {
        if (err1) throw err;
        obj.boData = result2;
        // data rendering as per UI requirement ---->
        // mapping to fetch the data to be displayed in po table view
        obj.boData.map((item) => {
          var cDate = item.po_creation_date
            , pDate = item.po_pickup_date
            , dDate = item.po_delivery_date;
          cDate.setHours(cDate.getHours()+5);
          cDate.setMinutes(cDate.getMinutes()+30);
          pDate.setHours(pDate.getHours()+5);
          pDate.setMinutes(pDate.getMinutes()+30);
          dDate.setHours(dDate.getHours()+5);
          dDate.setMinutes(dDate.getMinutes()+30);
          var tableDataObj = {
            purchaseOrderId : item.po_id,
            purchaseCreationDate : cDate.toLocaleDateString(),
            purchasePickupDate : pDate.toLocaleDateString(),
            purchaseDeliveryDate : dDate.toLocaleDateString()
          };
          tableData.push(tableDataObj);
        });
        // ---->
        var resObj = {
          tableData : tableData,
          poDetails : obj.poDetails,
        };
        res.json(resObj);
        con.end();
      }); // BO table query
    }); // Sku table query
  }); // PO table query
});

module.exports = po;
