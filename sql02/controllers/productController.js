const product = require('../models/product');

exports.getAllProducts = (req, res, next) => {
  product.findAll().then((rows) => {
    res.json(rows);
  });
};
exports.getProduct = (req, res, next) => {
  const { id } = req.params;
  product.findByid(id).then((rows) => {
    res.json(rows);
  });
};
exports.createProduct = (req, res, next) => {
  const product = req.body;
};

exports.updateProduct = (req, res, next) => {
  const { id } = req.params;
  const product = req.body;
};

exports.deleteProduct = (req, res, next) => {
  const { id } = req.params;
};
