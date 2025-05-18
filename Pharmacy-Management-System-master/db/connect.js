const mysql = require('mysql2');
const dbconfig = require('./config');
const connectionPool = mysql.createPool(dbconfig.connection);

module.exports = connectionPool;
