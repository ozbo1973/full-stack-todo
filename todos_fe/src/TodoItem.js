import React from "react";
import "./TodoItem.css";

const TodoItem = ({ name, completed, onDelete, _id, onToggle }) => {
  const linethrough = completed ? "completed" : "not_completed";
  return (
    <li className={linethrough}>
      <span className={linethrough} onClick={onToggle}>
        {name}
      </span>
      <span onClick={onDelete}> X </span>
    </li>
  );
};

export default TodoItem;
