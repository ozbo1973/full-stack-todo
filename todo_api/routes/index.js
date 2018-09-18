// routes/index.js
//houses all routes for the todo api.

const express = require("express"),
  db = require("../models"),
  fx = require("../helpers/todos_api"),
  router = express.Router();

router
  .route("/")
  .get(fx.getTodos)
  .post(fx.createTodo);

router
  .route("/:todoId")
  .get(fx.showTodo)
  .put(fx.updateTodo)
  .delete(fx.removeTodo);

module.exports = router;
