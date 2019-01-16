# DB
> 책에서는 시퀄라이즈를 사용해서 db를 조작하지만...  
> 쿼리문을 직접작성하는게 가독성 있고 좋을듯해 그방식을 작성한다.
> npm install mysql --save

```javascript
//mysql-db.js

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: '',
    database: 'mydb'
});

module.exports = connection;
```

```javascript
//app.js
var mysqlDB = require('./mysql-db');
mysqlDB.connect();
```

```javascript
/*show-data.js*/
var express = require('express');
var router = express.Router();

var mysqlDB = require('../mysql-db');

router.get('/', function (req, res, next) {
    mysqlDB.query('select 1 from dual', function (err, rows, fields) {
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
```


