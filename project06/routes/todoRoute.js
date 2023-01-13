const express = require('express');
const todoController = require('../controllers/todocontroller');
const router = express.Router();

router.get('/', todoController.getAllTodo);
router.get('/:idx', todoController.getTodo);
router.post('/', todoController.createTodo);
router.put('/:idx', todoController.editTodo);
router.delete('/:idx', todoController.deleteTodo);

module.exports = router;
