
var express = require('express');
var router = express.Router();

var mysqlDB = require('../mysql-db');

router.get('/', function (req, res, next) {
    mysqlDB.query('select * from user', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {    
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

router.get('/insert',function(req,res,next){
    const query = `INSERT INTO USER(id,name) VALUES (?) `;
    let value=[999,"이준명"]
    mysqlDB.query(query,[value], function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            console.log(fields);
            var result = 'rows : ' + JSON.stringify(rows) + '<br><br>' +
                'fields : ' + JSON.stringify(fields);
            res.send(result);
        } else {    
            console.log('query error : ' + err);
            res.send(err);
        }
    });
});

module.exports = router;