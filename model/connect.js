const mysql = require('mysql2/promise');
const config = {
    host : '127.0.0.1',
    user : '',
    password : '',
    database : '',
    dateStrings: 'date'
};

const pool = mysql.createPool(config);
module.exports = pool;