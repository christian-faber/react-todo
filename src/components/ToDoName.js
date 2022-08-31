import { useState } from "react";

const ToDoName = ({ name, setName }) => {
  const [edit, setEdit] = useState(false);
  // const [name, setName] = useState();
  const updateName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {edit ? (
        <input
          autoFocus
          type="text"
          value={name}
          onChange={updateName}
          className="todo-name"
          onBlur={() => setEdit(false)}
        />
      ) : (
        <h2 onClick={() => setEdit(true)}>{name}</h2>
      )}
    </div>
  );
};

/////make sure componets have return statement

export default ToDoName;
