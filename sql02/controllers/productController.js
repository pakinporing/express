const Product = require('../models/Product');

exports.getAllProducts = (req, res, next) => {
  Product.findAll().then((rows) => {
    res.json(rows);
  });
};
exports.getProduct = (req, res, next) => {
  const { id } = req.params;
  Product.findById(id).then((rows) => {
    res.json(rows);
  });
};
exports.createProduct = (req, res, next) => {
  const product = req.body;
  Product.create(product)
    .then((rs) => {
      if (rs.affectedRows) return res.json({ id: rs.insertId, ...product });
      // {id: rs.insertId, name: product.name,... }
      throw new Error('Cannot create this data');
    })
    .catch(next);
};

exports.updateProduct = (req, res, next) => {
  const { id } = req.params;
  const product = req.body;
  Product.update(id, product)
    .then((rs) => {
      if (rs.affectedRows) return res.json({ id, ...product });
      throw new Error('Cannot update this data');
    })
    .catch(next);
};

exports.deleteProduct = (req, res, next) => {
  const { id } = req.params;
  Product.delete(id)
    .then((rs) => {
      if (rs.affectedRows)
        return res.json({ msg: `id: ${id} have been deleted` });
      throw new Error('cannot delete this id');
    })
    .catch(next);
};
