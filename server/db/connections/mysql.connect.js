const mysql = require('mysql')
    , con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "tjx_dbs"
      });

module.exports = con;
