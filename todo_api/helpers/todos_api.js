//Helpers/todo_api.js.
//Build the Routes to pull data.

const db = require("../models");

exports.getTodos = (req, res) => {
  db.Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.send(err));
};

exports.createTodo = (req, res) => {
  db.Todo.create(req.body)
    .then(newTodo => res.json(newTodo))
    .catch(err => res.send(err));
};

exports.showTodo = (req, res) => {
  db.Todo.findById({ _id: req.params.todoId })
    .then(todo => res.json(todo))
    .catch(err => res.send(err));
};

exports.updateTodo = (req, res) => {
  db.Todo.findOneAndUpdate({ _id: req.params.todoId }, req.body, { new: true })
    .then(todo => res.json(todo))
    .catch(err => res.send(err));
};

exports.removeTodo = (req, res) => {
  db.Todo.remove({ _id: req.params.todoId })
    .then(data => res.json(`${req.params.todoId} has been removed.`))
    .catch(err => res.send(err));
};

module.exports = exports;
