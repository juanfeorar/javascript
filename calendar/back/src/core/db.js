'use strict'
const mysql = require('mysql');


const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'juan',
    password: '1234',
    database: 'calendar'
});

//console.log(process.env);

mysqlConnection.connect((err)=> {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('DB is connected');
    }
});
module.exports = mysqlConnection;