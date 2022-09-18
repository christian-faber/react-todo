import React from "react";
import { ToDo } from "./ToDo";

export const ToDoList = ({ todos, removeToDo, handleToggle, updateName }) =>
  todos.map((todo) => (
    <ToDo
      key={todo.id}
      todo={todo}
      handleToggle={handleToggle}
      updateName={updateName}
      removeToDo={removeToDo}
    />
  ));
