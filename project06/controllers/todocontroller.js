const db = require('../models/db');

exports.getAllTodo = (req, res, next) => {
  db.getList()
    .then((todo) => {
      res.json(todo);
    })
    .catch(next);
};

exports.getTodo = (req, res, next) => {
  let { idx } = req.params;
  db.getList()
    .then((todo) => {
      res.json(todo[idx]);
    })
    .catch(next);
};

exports.createTodo = (req, res, next) => {
  let { title } = req.body;
  if (!title) throw new Error('Please input title');
  db.addList(tltle)
    .then((list) => {
      res.json(list);
    })
    .catch(next);
};

exports.editTodo = (req, res, next) => {
  let { idx } = req.params;
  let { title } = req.body;
  db.editList(idx, title)
    .then((list) => {
      res.json(list);
    })
    .catch(next);
};

exports.deleteTodo = (req, res, next) => {
  const { idx } = req.params;
  db.deleteList(idx)
    .then((list) => {
      res.json(list);
    })
    .catch(next);
};
