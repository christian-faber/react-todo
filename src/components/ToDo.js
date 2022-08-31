import React from "react";
import ToDoName from "./ToDoName";

export function ToDo({ todo, removeToDo, toDoName, updateName }) {
  return (
    <div key="id">
      <input type="checkbox" checked={todo.complete} />
      <label>
        <ToDoName name={todo.name} setName={updateName} />
        {/* <div onClick={() => updateName(todo.name)}>{todo.name}</div> */}
      </label>
      <button className="delete" onClick={() => removeToDo(todo.id)}>
        x
      </button>
    </div>
  );
}
