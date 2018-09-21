import React, { Component } from "react";
import * as APICall from "./api";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = { todos: [] };
    this.addNewTodo = this.addNewTodo.bind(this);
  }

  componentWillMount() {
    this.onLoad();
  }

  async onLoad() {
    let todos = await APICall.getTodos();
    this.setState({ todos });
  }

  async addNewTodo(val) {
    let newTodo = await APICall.createTodo(val);
    this.setState({ todos: [...this.state.todos, newTodo.data] });
  }

  async handleOnDelete({ _id, name }) {
    await APICall.deleteTodo(_id, name);
    const todos = this.state.todos.filter(t => t._id !== _id);
    this.setState({ todos });
  }

  async handleOnToggle(todo) {
    await APICall.updateTodo(todo);
    const todos = this.state.todos.map(
      t => (t._id === todo._id ? { ...t, completed: !t.completed } : t)
    );
    this.setState({ todos });
  }

  render() {
    const todosList = this.state.todos.map(t => (
      <TodoItem
        key={t._id}
        {...t}
        onDelete={this.handleOnDelete.bind(this, t)}
        onToggle={this.handleOnToggle.bind(this, t)}
      />
    ));

    return (
      <div>
        <h1>TodoList Component</h1>
        <TodoForm addNewTodo={this.addNewTodo} />
        {todosList}
      </div>
    );
  }
}

export default TodoList;
