const mysql = require('mysql2');
const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'Agendapp',
    password:'toor'
});
module.exports = pool.promise();