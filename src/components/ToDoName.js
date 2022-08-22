import { useState } from "react";

const ToDoName = ({ name, setName }) => {
  const [edit, setEdit] = useState(false);

  return edit ? (
    <input
      autoFocus
      type="text"
      value={name}
      onChange={setName}
      className="todo-name"
      onBlur={() => setEdit(false)}
    />
  ) : (
    <h2 onClick={() => setEdit(true)}>{name}</h2>
  );
};

/////make sure componets have return statement

export default ToDoName;
