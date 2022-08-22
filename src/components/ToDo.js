import React from "react";
import ToDoName from "./ToDoName";

export function ToDo({ todo, removeToDo, todoName, updateName }) {
  // function handleToDoClick() {
  //change todo to a new object (destructured to do), call handle edit, pass new todo set to 'completed: true'
  // {...todo, complete: !todo.complete}
  // }
  //handleDelete()

  return (
    <div key="id">
      <ToDoName name={todoName} setName={updateName} />
      <label>
        <input type="checkbox" checked={todo.complete} />
        <div onClick={ToDoName}>{todo.name}</div>
        {/* <button onClick={editToDo} className="edit">
          ✎
        </button> */}
        <button className="delete" onClick={() => removeToDo(todo.id)}>
          x
        </button>
      </label>
    </div>
  );
}
