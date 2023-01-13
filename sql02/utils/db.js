const mysql = require('mysql2/promise');

const dbInfo = {
  host: 'localhost',
  user: 'root',
  password: 'por077347018',
  database: 'cc13_shop'
};

const pool = mysql.createPool(dbInfo);

module.exports = pool;
