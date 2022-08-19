import React from "react";
import { ToDo } from "./ToDo";

export const ToDoList = ({ todos, editToDo, removeToDo }) =>
  todos.map((todo) => (
    <ToDo
      key={todo.id}
      todo={todo}
      removeToDo={removeToDo}
      editToDo={editToDo}
    />
  ));
