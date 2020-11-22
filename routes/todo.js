const express = require('express');
const todoRouter = express.Router();
const todoController = require('../controllers/todoController');

todoRouter.get('/', todoController.getTodos);
todoRouter.post('/', todoController.addTodo);
todoRouter.delete('/', todoController.deleteAllTodos);
todoRouter.delete('/:todoID', todoController.deleteTodo);
todoRouter.put('/:todoID', todoController.updateTodo);
todoRouter.put('/toggle-todo/:todoID', todoController.toggleTodo);

module.exports = todoRouter;
