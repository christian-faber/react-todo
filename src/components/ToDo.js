import { useState } from "react";
// import ToDoName from "./ToDoName";

export function ToDo({ todo, removeToDo, updateName, handleToggle }) {
  const [edit, setEdit] = useState(false);
  const handleEnter = (evt) => {
    if (evt.key !== "Enter") return;

    setEdit(false);
  };
  return (
    <div key="id">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => handleToggle(todo.id)}
      />
      {edit ? (
        <input
          autoFocus
          type="text"
          value={todo.title}
          onChange={(evt) => updateName(todo.id, evt.target.value)}
          className="todo-name"
          onBlur={() => setEdit(false)}
          onKeyDown={handleEnter}
        />
      ) : (
        <span onClick={() => setEdit(true)}>{todo.title}</span>
      )}
      {/* <label>
        <ToDoName name={todo.name} setEdit={updateName} />
        {/* <div onClick={() => updateName(todo.name)}>{todo.name}</div> */}
      {/* </label> */}
      <button className="delete" onClick={() => removeToDo(todo.id)}>
        x
      </button>
    </div>
  );
}
