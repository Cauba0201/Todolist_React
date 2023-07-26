import React from "react";
import { useState } from "react";

export const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  const handleSubmit = (e) => {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  };
  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        value={value}
        className="todo-input"
        placeholder="Update task "
        type="text"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button className="todo-btn" type="submit">
        Update Task
      </button>
    </form>
  );
};
