import React, { Component } from "react";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewTodo(this.state.inputValue);
    this.setState({ inputValue: "" });
  }

  render() {
    return (
      <form>
        <input
          type="input"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <button type="submit" onClick={this.handleSubmit}>
          Add Todo
        </button>
      </form>
    );
  }
}

export default TodoForm;
