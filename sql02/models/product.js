const db = require('../utils/db');

exports.findAll = () => {
  let sql = 'select * from products';
  return db.execute(sql).then(([rs]) => rs);
};

exports.findByid = (id) => {
  let sql = 'select * from products where id=?';
  return db.execute(sql, [id]).then(([rs]) => rs);
};
