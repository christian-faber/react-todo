import React from "react";

export function ToDo({ todo, editToDo, removeToDo }) {
  // function handleToDoClick() {
  //change todo to a new object (destructured to do), call handle edit, pass new todo set to 'completed: true'
  // {...todo, complete: !todo.complete}
  // }

  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} />
        {todo.name}
        <button onClick={editToDo} className="edit">
          ✎
        </button>
        <button className="delete" onClick={removeToDo}>
          x
        </button>
      </label>
    </div>
  );
}
