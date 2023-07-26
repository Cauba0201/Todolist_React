import React from "react";
import { useState } from "react";

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(value);
    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        className="todo-input"
        placeholder="What is the task today ? "
        type="text"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="todo-btn" type="submit">
        Add Task
      </button>
    </form>
  );
};
