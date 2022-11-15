import React from "react";
import { useState } from "react";
import Card from "./Card";

function TodoForm({ handleAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (text !== "") {
      const newTodo = {
        text,
        completed: false,
      };
      handleAdd(newTodo);
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>write a new task</h2>
        <div className="input-group">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Add
          </button>
        </div>
      </form>
    </Card>
  );
}

export default TodoForm;
