const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'por077347018',
  database: 'cc13_shop'
});

app.get('/product', (req, res, next) => {
  pool.query('select * from products').then(([rs]) => {
    res.json(rs);
  });
});

app.get('/category', (req, res, next) => {
  pool.query('select * from category').then(([rs]) => {
    res.json(rs);
  });
});

app.get('/product/:id', (req, res, next) => {
  let { id } = req.params;
  pool.query('select * from products where id=?', [id]).then(([rs]) => {
    res.json(rs);
  });
});

app.get('/category/:id', (req, res, next) => {
  let { id } = req.params;
  pool.query('select * from category where id=?', [id]).then(([rs]) => {
    res.json(rs);
  });
});

app.listen(8000, () => console.log('Server on 8000'));
