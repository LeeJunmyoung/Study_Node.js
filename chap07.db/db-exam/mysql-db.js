var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    post: 3306,
    user: 'root',
    password: 'tkfkdgody1',
    database: 'node'
});

module.exports = connection;